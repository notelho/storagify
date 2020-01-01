// function SHA256_sigma0(x) {]
//, return ((x >>> 7) | (x << 25)) ^ ((x >>> 18) | (x << 14)) ^ (x >>> 3);
// }

// function SHA256_sigma1(x) {
//   return ((x >>> 17) | (x << 15)) ^ ((x >>> 19) | (x << 13)) ^ (x >>> 10);
// }

// function SHA256_Sigma0(x) {
//   return ((x >>> 2) | (x << 30)) ^ ((x >>> 13) | (x << 19)) ^
//     ((x >>> 22) | (x << 10));
// }

// function SHA256_Sigma1(x) {
//   return ((x >>> 6) | (x << 26)) ^ ((x >>> 11) | (x << 21)) ^
//     ((x >>> 25) | (x << 7));
// }

// function SHA256_Ch(x, y, z) {
//   return z ^ (x & (y ^ z));
// }

// function SHA256_Maj(x, y, z) {
//   return (x & y) ^ (z & (x ^ y));
// }