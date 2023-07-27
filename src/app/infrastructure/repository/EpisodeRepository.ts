import { useBackend } from "@/composables/useBackend";
import { ParamsMany, CustomRequest } from '@/types/general.types';
import ApiRoutes from '@/app/infrastructure/ApiRoutes';

export default class EpisodeRepository {

  static fetchMany(params: ParamsMany): Promise<CustomRequest> {
    return useBackend(ApiRoutes.Episode.FetchMany, { params }) as Promise<CustomRequest>;
  }

  static fetchOne(characterId: string): Promise<CustomRequest> {
    return useBackend(ApiRoutes.Episode.ShowOne(characterId)) as Promise<CustomRequest>;
  }

  static fetchByCharacter(stringEpisode: string): Promise<CustomRequest> {
    return useBackend(ApiRoutes.Episode.ShowOne(stringEpisode)) as Promise<CustomRequest>;
  }
}
