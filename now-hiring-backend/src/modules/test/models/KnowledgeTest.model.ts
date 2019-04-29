import {Test} from "./Test.model";
import {Question} from "./Question.model";

export interface KnowledgeTest extends Test{
    questions:[Question]
}
