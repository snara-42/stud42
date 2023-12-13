// DO NOT EDIT THIS FILE MANUALLY - IT IS GENERATED FROM THE CONTENT OF THE CAMPUS FOLDER
// RUN `yarn generate:campus` TO REGENERATE IT

import { ICampus } from './types';
import { CampusIdentifier } from './types.generated';

import { Angouleme } from './campus/angouleme';
import { Helsinki } from './campus/helsinki';
import { Lausanne } from './campus/lausanne';
import { Madrid } from './campus/madrid';
import { Malaga } from './campus/malaga';
import { Mulhouse } from './campus/mulhouse';
import { Paris } from './campus/paris';
import { SaoPaulo } from './campus/saoPaulo';
import { Seoul } from './campus/seoul';
import { Tokyo } from './campus/tokyo';
import { Urduliz } from './campus/urduliz';
import { Vienna } from './campus/vienna';
import { Wolfsburg } from './campus/wolfsburg';

/**
 * Campuses represents the list of campuses present in the application.
 * Particulary, used in the cluster map.
 *
 * It is a const, so it can be accessed from anywhere in the application.
 * You can add a new campus by define the campus in the `campus` folder
 * (see `campus/paris.ts` for an example) and run `yarn generate:campus`
 */
export const Campuses: Record<CampusIdentifier, ICampus> = {
  angouleme: new Angouleme(),
  helsinki: new Helsinki(),
  lausanne: new Lausanne(),
  madrid: new Madrid(),
  malaga: new Malaga(),
  mulhouse: new Mulhouse(),
  paris: new Paris(),
  saoPaulo: new SaoPaulo(),
  seoul: new Seoul(),
  tokyo: new Tokyo(),
  urduliz: new Urduliz(),
  vienna: new Vienna(),
  wolfsburg: new Wolfsburg(),
};
