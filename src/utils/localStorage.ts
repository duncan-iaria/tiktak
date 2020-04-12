import AsyncStorage from '@react-native-community/async-storage';

import { BoardStateType } from '../board';

export interface IPastVictory {
  winner: BoardStateType;
  date: Date;
}

export enum StorageKeys {
  PastVictories = 'PAST_VICTORIES',
}

const addToPastVictories = async (newPastVictory: IPastVictory) => {
  try {
    const tempPastVictories = await getPastVictories();

    await AsyncStorage.setItem(
      StorageKeys.PastVictories,
      JSON.stringify([newPastVictory, ...tempPastVictories])
    );
  } catch (error) {
    console.log('Error saving new victory...', error);
  }
};

const getPastVictories = async (): Promise<IPastVictory[]> => {
  try {
    const tempVictories = await AsyncStorage.getItem(StorageKeys.PastVictories);
    if (tempVictories !== null) {
      return JSON.parse(tempVictories);
    }

    return [];
  } catch (error) {
    console.log('Error getting past victories...', error);
    return [];
  }
};

export { addToPastVictories, getPastVictories };
