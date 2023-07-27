import { useBackend } from "@/composables/useBackend";
import { ParamsMany, CustomRequest } from '@/types/general.types';
import ApiRoutes from '@/app/infrastructure/ApiRoutes';

export default class LocationRepository {

  static fetchMany(params: ParamsMany): Promise<CustomRequest> {
    return useBackend(ApiRoutes.Location.FetchMany, { params }) as Promise<CustomRequest>;
  }

  static fetchOne(characterId: string): Promise<CustomRequest> {
    return useBackend(ApiRoutes.Location.ShowOne(characterId)) as Promise<CustomRequest>;
  }

  static fetchByCharacter(stringLocation: string): Promise<CustomRequest> {
    return useBackend(ApiRoutes.Location.ShowOne(stringLocation)) as Promise<CustomRequest>;
  }
}
