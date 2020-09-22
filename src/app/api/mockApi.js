import { delay } from "../common/util/util";
import {sampleData} from './sampleData';
import {proj} from './proj';

export function fetchSampleData () {
    return delay(1000).then(function() {
        return Promise.resolve(sampleData)
    })
}
export function fetchProjectData () {
    return delay(1000).then(function() {
        return Promise.resolve(proj)
    })
}