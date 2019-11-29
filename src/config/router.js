export const routes = {
  LOGIN: {
    url: '/login',
    title: ''
  },
  EXHIBITIONS: {
    url: '/exhibitions',
    title: ''
  },
  COLLECTIONS: {
    url: '/collections',
    title: 'Collections'
  },
  SHOP: {
    url: '/shop',
    title: 'Shop'
  },
  TICKETS: {
    url: '/tickets',
    title: 'Plan Your Visit',
  }
};

export const getTitle = () => {
  const location = window.location.pathname;
  const path = Object.values(routes).find(item => item.title && item.url.includes(location));
  return path ? path.title : '';
}
