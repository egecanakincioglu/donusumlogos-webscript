export const headerLinks = [
  {
    label: 'Ana Sayfa',
    route: '/',
  },
  {
    label: 'Etkinlik Oluştur',
    route: '/events/create',
  },
  {
    label: 'Profilim',
    route: '/profile',
  },
]

export const eventDefaultValues = {
  title: '',
  description: '',
  location: '',
  imageUrl: '',
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: '',
  price: '',
  isFree: false,
  url: '',
}
