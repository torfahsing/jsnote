import './preview.css'
import { useEffect, useRef } from "react";

interface PreviewProps {
    code: string;
    bundelingError: string;
}

const html = `
        <html>
            <head>
                <style>html { background-color: white; }</style>
            </head>
            <body>
                <div id="root"></div>
                <script>
                    const handleError = (err) => {
                        const root = document.querySelector('#root');
                        root.innerHTML = '<div style="color: red;"><h1>Runtime error </h1>' + err + '</div>';
                        console.log(err);
                    };

                    window.addEventListener('error', (event) => {
                        event.preventDefault();
                        handleError(event.error);
                    });
                    window.addEventListener('message', (event) => {
                        try {
                            eval(event.data);
                        } catch(err) {
                            handleError(err);
                        }
                    }, false);
                </script>
            </body>
        </html>
    `;
const Preview: React.FC<PreviewProps> = ({ code, bundelingError }) => {
    const iframe = useRef<any>();

    useEffect(() => {
        iframe.current.srcdoc = html;
        setTimeout(() => {
            iframe.current.contentWindow.postMessage(code, '*');
        }, 50);
        
    }, [code]);

    return (
        <div className="preview-wrapper">
            <iframe

                ref={iframe} 
                sandbox="allow-scripts" 
                srcDoc = { html } 
                title="preview" />
            {bundelingError && <div className="preview-error">{bundelingError}</div>}
        </div>);
}

export default Preview;