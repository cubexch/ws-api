use std::path::Path;

fn main() {
    if !std::process::Command::new("which").arg("protoc")
        .status().expect("which")
        .success()
    {
        println!("cargo:warning=protoc not found. skipping {} codegen", env!("CARGO_PKG_NAME"));
        return;
    }

    let proto_inputs = &[
        Path::new("../../schema/market_data.proto"),
        Path::new("../../schema/trade.proto"),
        Path::new("../../schema/codes.proto"),
    ];
    for input in proto_inputs {
        println!("cargo:rerun-if-changed={}", input.display());
    }

    prost_build::Config::new()
        .type_attribute(
            ".",
            "#[cfg_attr(feature = \"serde\", derive(serde::Serialize, serde::Deserialize))]\n\
             #[cfg_attr(feature = \"serde\", serde(rename_all = \"camelCase\"))]\n\
             #[cfg_attr(feature = \"schemars\", derive(schemars::JsonSchema))]\
            "
        )
        .out_dir(Path::new("src/"))
        .compile_protos(
            proto_inputs,
            &["../../schema/"],
        )
        .expect("prost");
}
