import {Injectable} from '@nestjs/common';
import * as md5 from 'md5';
import * as crypto from 'crypto'
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
    /**
     * Generate id
     * @param {string} plain
     * @returns {string}
     */
    public generateId(length:number): string {
        return crypto.randomBytes(length).toString('hex');
    }
}
