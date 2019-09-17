import { IArticles } from './articlesTypes';
import { IServerData } from './serverDataTypes';

export interface IAppState {
  articles: IArticles
  serverData: IServerData;
}