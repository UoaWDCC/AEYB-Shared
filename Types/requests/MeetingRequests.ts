import MeetingDTO from '../dtos/MeetingDTO';

export type AddMeetingRequest = Omit<MeetingDTO, 'id' | 'creator'>;

export type UpdateMeetingRequest = Partial<Omit<MeetingDTO, 'id' | 'creator'>>;
