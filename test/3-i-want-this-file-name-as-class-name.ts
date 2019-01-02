/* Live template:
command: zefilename

text:"

"

fileNameWithoutExtension()
capitalize()
regularExpression(String, Pattern, Replacement)
 */
export class IWantThisFileNameAsClassName {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const classFromThisFile = new IWantThisFileNameAsClassName('Bobby');
