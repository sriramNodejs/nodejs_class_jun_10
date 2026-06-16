// what is DNS 
// Domain Name System 
const dns = require('dns');
const dnsPromises  = require('dns/promises')

// dns.lookup('google.com', (err, address) => {
//     console.log(address, 'address')
// })


// dnsPromises.lookup('amazon.in').then((address, family) => {
//     console.log(address, family)
// }).catch((err) => {
//     console.log(err)
// })

// IPV4

// dns.resolve4('google.com', (err, addresses) => {
//     console.log(addresses);
// })

// // IPV6
// dns.resolve6('google.com', (err, addresses) => {
//     console.log(addresses);
// })

// find hostnmae 
// dns.reverse('8.8.8.8', (err, hostnames) => {
dns.reverse('142.251.43.78', (err, hostnames) => {
    console.log(hostnames);
})