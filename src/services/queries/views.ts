import { client } from "$services/redis";
import { itemsKey, itemsByViewsKey, itemsViewsKey } from '$services/keys';


export const incrementView = async (itemId: string, userId: string) => {
  // Old way:

  // const inserted = await client.pfAdd(itemsViewsKey(itemId), userId);

  // if (inserted) {
  //   return Promise.all([
  //     client.hIncrBy(itemsKey(itemId), 'views', 1),
  //     client.zIncrBy(itemsByViewsKey(), 1, itemId)
  //   ]);
  // }

  // New way:
  return client.incrementView(itemId, userId);
};

// Keys I need to access
// 1) itemsViewsKey
// 2) itemsKey -> items#dfsad
// 3) itemsByViewsKey

// EVALSHA <ID> 3 

// Arguments I need to accept
// 1) itemId
// 2) userId
