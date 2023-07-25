import { useBackend } from "@/composables/useBackend";
import ApiRoutes from '@/app/infrastructure/ApiRoutes';
import { ParamsMany, CustomRequest } from '@/utils/general.types';

export default class CharacterRepository {

  static fetchMany(params: ParamsMany): Promise<CustomRequest> {
    return useBackend(ApiRoutes.Characters.FetchMany, { params }) as Promise<CustomRequest>;
  }

  static fetchOne(characterId: string): Promise<CustomRequest> {
    return useBackend(ApiRoutes.Characters.ShowOne(characterId)) as Promise<CustomRequest>;
  }

  static fetchByCharacter(stringCharacter: string): Promise<CustomRequest> {
    return useBackend(ApiRoutes.Characters.ShowOne(stringCharacter)) as Promise<CustomRequest>;
  }
}
