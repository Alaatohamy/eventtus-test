export const rootApi = "http://localhost:3001";

// Exhibihtors api
export const exhibihtorsApi = `${rootApi}/categories/1/posts.json`;
export const exhibihtorApi= (id) => `${rootApi}/categories/1/posts/${id}.json`;
