import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

// test for getFullYear
describe('getFullYear', () => {
    it('should return the current year', () => {
        expect(getFullYear()).toBe(new Date().getFullYear());
    });
});

// test for getFooterCopy
describe('getFooterCopy', () => {
    it('should return the correct string when the argument is true', () => {
        expect(getFooterCopy(true)).toBe('Holberton School');
    });

    it('should return the correct string when the argument is false', () => {
        expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    });
});

// test for getLatestNotification
describe('getLatestNotification', () => {
    it('should return the correct string', () => {
        expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
    });
});