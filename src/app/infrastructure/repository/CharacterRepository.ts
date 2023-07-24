import { AxiosResponse } from 'axios';
import { useBackend } from "@/composables/useBackend";
import ApiRoutes from '@/app/infrastructure/ApiRoutes';
import { PaginationParams } from '@/utils/general.types';

export default class CharacterRepository {

  static fetchMany(): Promise<PaginationParams | null> {
    return useBackend(ApiRoutes.Characters.FetchMany) as Promise<PaginationParams | null>;
  }

  // static fetchOne(characterId: string): Promise<AxiosResponse> {
  //   return useBackend(ApiRoutes.Characters.ShowOne(characterId));
  // }
}
