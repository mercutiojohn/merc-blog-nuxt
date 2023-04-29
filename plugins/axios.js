export default function({ $axios, error: nuxtError }) {
    $axios.onError(error => {
        nuxtError({
            statusCode: error.response.status,
            message: error.message
        });
        console.error(error);
        return Promise.resolve(false);
        // return Promise.resolve(error);
    });
}