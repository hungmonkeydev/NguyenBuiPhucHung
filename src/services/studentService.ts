import type { Student } from '../model/student';
import { storage } from './storages';

const KEY = 'students';

export const studentService = {
  getAll(): Student[] {
    return storage.get<Student[]>(KEY) ?? [];
  },
  // TODO: Implement create, update, delete methods
};
