'use client';

import api from '@/lib/api';
import { QuerySWRKeys } from '@/types/swr';
import useSWR from 'swr';

export const usePastEvents = () => {
  const {
    data,
    isLoading,
    mutate,
  } = useSWR(QuerySWRKeys.PAST_EVENTS, api.getPastEvents.bind(api));

  return {
    pastEvents: data,
    isLoading,
    mutate,
  };
};

export const useUpcomingEvents = () => {
  const {
    data,
    isLoading,
    mutate,
  } = useSWR(QuerySWRKeys.UPCOMING_EVENTS, api.getUpcomingEvents.bind(api));

  return {
    upcomingEvents: data,
    isLoading,
    mutate,
  };
};

export const usePastEventsByCommittee = ({ committeeId }: { committeeId:string }) => {
  const {
    data,
    isLoading,
    mutate,
  } = useSWR(
    QuerySWRKeys.PAST_EVENTS_BY_COMMITTEE,
    () => api.getPastEventsByCommittee({ committeeId }),
  );

  return {
    pastEventsByCommittee: data,
    isLoading,
    mutate,
  };
};

export const useUpcomingEventsByCommittee = ({ committeeId }: { committeeId:string }) => {
  const {
    data,
    isLoading,
    mutate,
  } = useSWR(
    QuerySWRKeys.UPCOMING_EVENTS_BY_COMMITTEE,
    () => api.getUpcomingEventsByCommittee({ committeeId }),
  );

  return {
    upcomingEventsByCommittee: data,
    isLoading,
    mutate,
  };
};

export const usePhotos = () => {
  const {
    data,
    isLoading,
    error,
  } = useSWR(
    QuerySWRKeys.UPCOMING_EVENTS_BY_COMMITTEE,
    () => api.getFullImages(),
  );

  if (error) {
    return {
      allPhotos: [],
      isDataLoading: false,
    };
  }

  return {
    allPhotos: data,
    isDataLoading: isLoading,
  };
};
