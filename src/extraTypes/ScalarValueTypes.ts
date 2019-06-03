// TSBuffer extra scalar value types alias (for serialization)

// Varint Encoding
declare type int = number;
declare type sint = number; // zig-zag varint
declare type uint = number;

// Fixed Length Encoding
declare type int32 = number;
declare type int64 = number;
declare type uint32 = number;
declare type uint64 = number;
declare type float = number;
declare type double = number;