import {Injectable} from '@nestjs/common';
import * as md5 from 'md5';

@Injectable()
export class CryptoService {
    /**
     * Compare hash
     * @param {string} plain
     * @param {string} hash
     * @returns {boolean}
     */
    public compare(plain: string, hash: string): boolean {
        return md5(plain) === hash;
    }

    /**
     * Generate hash
     * @param {string} plain
     * @returns {string}
     */
    public hash(plain: string): string {
        return md5(plain);
    }
}
