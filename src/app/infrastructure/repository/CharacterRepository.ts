import { AxiosResponse } from 'axios';
import { useBackend } from "@/composables/useBackend";
import ApiRoutes from '@/app/infrastructure/ApiRoutes';

export default class CharacterRepository {

  static fetchMany(): Promise<AxiosResponse> {
    return useBackend(ApiRoutes.Characters.FetchMany);
  }

  static fetchOne(characterId: string): Promise<AxiosResponse> {
    return useBackend(ApiRoutes.Characters.ShowOne(characterId));
  }
}
