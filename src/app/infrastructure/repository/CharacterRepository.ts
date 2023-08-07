import { useBackend } from "@/composables/useBackend";
import ApiRoutes from "@/app/infrastructure/ApiRoutes";
import {
  ParamsMany,
  CustomRequest,
  paramsSearchCharacter,
} from "@/types/general.types";

export default class CharacterRepository {
  static fetchMany(params: ParamsMany): Promise<CustomRequest> {
    return useBackend(ApiRoutes.Characters.FetchMany, {
      params,
    }) as Promise<CustomRequest>;
  }

  static fetchOne(characterId: string): Promise<CustomRequest> {
    return useBackend(
      ApiRoutes.Characters.ShowOne(characterId)
    ) as Promise<CustomRequest>;
  }

  static fetchByCharacter(stringCharacter: string): Promise<CustomRequest> {
    return useBackend(
      ApiRoutes.Characters.ShowOne(stringCharacter)
    ) as Promise<CustomRequest>;
  }
  static search(params: paramsSearchCharacter): Promise<CustomRequest> {
    return useBackend(ApiRoutes.Characters.Search, {
      params,
    }) as Promise<CustomRequest>;
  }
}
