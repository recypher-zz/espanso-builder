import { CopyBlock, dracula } from 'react-code-blocks';

function Output({triggerText, replaceText,  multiline  }) {
    const outputCode = `- trigger: "${triggerText}"\n   replace: ${multiline ? "|\n" + formatReplaceText(replaceText, true) : replaceText}`;


    return (
    <>
        <div className="output m-8">
            <CopyBlock
                text={outputCode}
                language='yaml'
                wrapLines={true}
                showLineNumbers={true}
                theme={dracula}
                codeBlock
            />
        </div>
    </>
    );
}

function formatReplaceText(text, multiline) {
    if (!multiline) return text;

    return text
        .split("\n")
        .map((line) => `      ${line}`)
        .join("\n");
}

export default Output;
