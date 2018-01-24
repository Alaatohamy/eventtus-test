export const rootApi = "http://localhost:3001";

// Exhibihtors api
export const exhibihtorsApi = `${rootApi}/All.json`;
export const exhibihtorApi= (id) => `${rootApi}/exhibitors/${id}`;
