use std::path::Path;

fn main() {
    let proto_inputs = &[
        Path::new("../../schema/market_data.proto"),
        Path::new("../../schema/trade.proto"),
        Path::new("../../schema/codes.proto"),
    ];
    for input in proto_inputs {
        println!("cargo:rerun-if-changed={}", input.display());
    }

    prost_build::Config::new()
        .out_dir(Path::new("src/"))
        .compile_protos(
            proto_inputs,
            &["../../schema/"],
        )
        .expect("prost");
}
