/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
        {
            protocol:'https',
            hostname: 'res.cloudinary.com',
            pathname:'/**' 
        },
        {
            protocol:'https',
            hostname: 'storage.googleapis.com',
            pathname:'/**' 
        }
        ]
        // domains:["res.cloudinary.com","storage.googleapis.com"],
    },
};

export default nextConfig;
