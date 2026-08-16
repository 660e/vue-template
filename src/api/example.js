import { request } from '@/utils';

export function randomuser(params = {}) {
  return request.get('https://randomuser.me/api/', { params: { nat: 'us', ...params } });
}
