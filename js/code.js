document.addEventListener('DOMContentLoaded', function () {
    var codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(function (codeBlock) {
        var button = document.createElement('button');
        button.className = 'copy-button';
        button.type = 'button';
        button.innerText = 'Copy';

        button.addEventListener('click', function () {
            var code = codeBlock.innerText;
            navigator.clipboard.writeText(code).then(function () {
                button.innerText = 'Copied';
                button.classList.add('copied');
                setTimeout(function () {
                    button.innerText = 'Copy';
                    button.classList.remove('copied');
                }, 2000);
            }).catch(function (error) {
                button.innerText = 'Error';
            });
        });

        var wrapper = document.createElement('div');
        wrapper.className = 'mac-code';
        var header = document.createElement('div');
        header.className = 'mac-code-header';
        header.innerHTML = `
            <div class="mac-code-btn red"></div>
            <div class="mac-code-btn yellow"></div>
            <div class="mac-code-btn green"></div>
        `;
        
        wrapper.appendChild(header);
        wrapper.appendChild(codeBlock.parentNode); // move the original pre element
        wrapper.appendChild(button); // add copy button
        
        codeBlock.parentNode.replaceWith(wrapper);
    });
});
