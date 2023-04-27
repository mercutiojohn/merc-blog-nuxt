export default function({ $axios }, inject) {
  // Create a custom axios instance
  const notionApi = $axios.create({
    headers: {
      common: {
        Accept: "text/plain, */*"
      }
    }
  });

  // Set baseURL to something different
  notionApi.setBaseURL("https://blogapi.mercutio.club/v1");

  // Inject to context as $notionApi
  inject("notionApi", notionApi);
}
