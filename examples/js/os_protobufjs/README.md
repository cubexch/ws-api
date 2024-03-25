# Cube Exchange Order Service Connection Example

This example tests to see if a connection can be made to the Cube Order Service:
- Connects to Websocket
- Prepares a Credentials message for a specific API key (user-supplied)
- Logs in
- Dumps received Bootstrap information to the console

A full implementation would also need to:
- Send heartbeats
- Process "OrderResponse" messages

## Note on Protobuf

This example uses the `protobufjs` library which loads the `.proto` file at runtime.

We also provide TypeScript bindings generated with `ts-proto` at https://github.com/cubexch/ws-api/tree/main/generated/js.

## To Run
- Set the values in the "Tunables" section of `os_example.js`
- Install `yarn` and `node`
- From this directory:
```
yarn install
node os_example.js
```
