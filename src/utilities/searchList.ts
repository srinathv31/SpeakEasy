import RecordingItem from "../interfaces/Recording";

// Returning max of: New(n-1) Recording (n)
export function findDuplicateNamesInList(recordingList: RecordingItem[], name: string): string {
    if (!recordingList.some(item => item.name === name)) {
        return name;
    }
    name = "New "+name;
    return findDuplicateNamesInList(recordingList, name);
}
