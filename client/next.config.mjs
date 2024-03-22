/** @type {import('next').NextConfig} */
const nextConfig = {
env: {
    REACT_APP_API_DOMAIN: "https://localhost:8000/api",
    REACT_APP_IMG_DOMAIN: "https://localhost:8000/img",
},
redirects: ()=>{
    return [
        {
            source: '/',
            destination: '/store',
            permanent: true,
        }
    ]
}
};

export default nextConfig;