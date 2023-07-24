import { useBackend } from "@/composables/useBackend";
import ApiRoutes from '@/app/infrastructure/ApiRoutes';
import {ParamsMany , PaginationParams } from '@/utils/general.types';

export default class CharacterRepository {

  static fetchMany(params: ParamsMany): Promise<PaginationParams | null> {
    return useBackend(ApiRoutes.Characters.FetchMany, { params}) as Promise<PaginationParams | null>;
  }

  // static fetchOne(characterId: string): Promise<AxiosResponse> {
  //   return useBackend(ApiRoutes.Characters.ShowOne(characterId));
  // }
}
