(function(window) {
    'use strict';

    // Advanced obfuscation settings based on file size (supports up to 2.1MB)
    function getAdvancedObfuscationOptions(codeLength) {
        const randomSeed = Math.floor(Math.random() * 1000000);
        
        const sizeInKB = codeLength / 1024;
        const isSmall = sizeInKB <= 100;
        const isMedium = sizeInKB > 100 && sizeInKB <= 400;
        const isLarge = sizeInKB > 400 && sizeInKB <= 800;
        const isVeryLarge = sizeInKB > 800 && sizeInKB <= 1400;
        const isHuge = sizeInKB > 1400;

        // MAXIMUM security for small files (0-100 KB)
        if (isSmall) {
            return {
                compact: true,
                controlFlowFlattening: true,
                controlFlowFlatteningThreshold: 1.0,
                deadCodeInjection: true,
                deadCodeInjectionThreshold: 0.4,
                debugProtection: false,
                debugProtectionInterval: 0,
                disableConsoleOutput: true,
                identifierNamesGenerator: 'hexadecimal',
                identifiersPrefix: '',
                ignoreRequireImports: false,
                log: false,
                numbersToExpressions: true,
                renameGlobals: false,
                rotateStringArray: true,
                seed: randomSeed,
                selfDefending: true,
                simplify: true,
                splitStrings: true,
                splitStringsChunkLength: 5,
                stringArray: true,
                stringArrayCallsTransform: true,
                stringArrayCallsTransformThreshold: 0.9,
                stringArrayEncoding: ['base64', 'rc4'],
                stringArrayIndexShift: true,
                stringArrayRotate: true,
                stringArrayShuffle: true,
                stringArrayWrappersCount: 1,
                stringArrayWrappersChainedCalls: true,
                stringArrayWrappersParametersMaxCount: 2,
                stringArrayWrappersType: 'variable',
                stringArrayThreshold: 1.0,
                target: 'node',
                ignoreImports: true,
                reservedNames: [
                    '^THREE$',
                    '^module$',
                    '^exports$',
                    '^require$',
                    '^window$',
                    '^document$',
                    '^process$'
                ],
                transformObjectKeys: true,
                unicodeEscapeSequence: true
            };
        }

        // HIGH security for medium files (100-400 KB)
        if (isMedium) {
            return {
                compact: true,
                controlFlowFlattening: true,
                controlFlowFlatteningThreshold: 0.85,
                deadCodeInjection: true,
                deadCodeInjectionThreshold: 0.3,
                debugProtection: false,
                debugProtectionInterval: false,
                disableConsoleOutput: true,
                identifierNamesGenerator: 'hexadecimal',
                identifiersPrefix: '',
                ignoreRequireImports: false,
                log: false,
                numbersToExpressions: false,
                renameGlobals: false,
                rotateStringArray: true,
                seed: randomSeed,
                selfDefending: true,
                simplify: true,
                splitStrings: true,
                splitStringsChunkLength: 7,
                stringArray: true,
                stringArrayCallsTransform: true,
                stringArrayCallsTransformThreshold: 0.8,
                stringArrayEncoding: ['base64', 'rc4'],
                stringArrayIndexShift: true,
                stringArrayRotate: true,
                stringArrayShuffle: true,
                stringArrayWrappersCount: 1,
                stringArrayWrappersChainedCalls: true,
                stringArrayWrappersParametersMaxCount: 2,
                stringArrayWrappersType: 'variable',
                stringArrayThreshold: 0.9,
                target: 'node',
                ignoreImports: true,
                reservedNames: [
                    '^THREE$',
                    '^module$',
                    '^exports$',
                    '^require$',
                    '^window$',
                    '^document$',
                    '^process$'
                ],
                transformObjectKeys: true,
                unicodeEscapeSequence: true
            };
        }

        // STRONG security for large files (400KB-800KB)
        if (isLarge) {
            return {
                compact: true,
                controlFlowFlattening: true,
                controlFlowFlatteningThreshold: 0.7,
                deadCodeInjection: true,
                deadCodeInjectionThreshold: 0.25,
                debugProtection: false,
                debugProtectionInterval: false,
                disableConsoleOutput: true,
                identifierNamesGenerator: 'hexadecimal',
                identifiersPrefix: '',
                ignoreRequireImports: false,
                log: false,
                numbersToExpressions: false,
                renameGlobals: false,
                rotateStringArray: true,
                seed: randomSeed,
                selfDefending: true,
                simplify: true,
                splitStrings: true,
                splitStringsChunkLength: 10,
                stringArray: true,
                stringArrayCallsTransform: true,
                stringArrayCallsTransformThreshold: 0.7,
                stringArrayEncoding: ['base64', 'rc4'],
                stringArrayIndexShift: true,
                stringArrayRotate: true,
                stringArrayShuffle: true,
                stringArrayWrappersCount: 1,
                stringArrayWrappersChainedCalls: false,
                stringArrayWrappersParametersMaxCount: 2,
                stringArrayWrappersType: 'variable',
                stringArrayThreshold: 0.8,
                target: 'node',
                ignoreImports: true,
                reservedNames: [
                    '^THREE$',
                    '^module$',
                    '^exports$',
                    '^require$',
                    '^window$',
                    '^document$',
                    '^process$'
                ],
                transformObjectKeys: true,
                unicodeEscapeSequence: false
            };
        }

        // MODERATE security for very large files (800KB-1.4MB)
        if (isVeryLarge) {
            return {
                compact: true,
                controlFlowFlattening: true,
                controlFlowFlatteningThreshold: 0.5,
                deadCodeInjection: true,
                deadCodeInjectionThreshold: 0.15,
                debugProtection: false,
                debugProtectionInterval: false,
                disableConsoleOutput: true,
                identifierNamesGenerator: 'hexadecimal',
                identifiersPrefix: '',
                ignoreRequireImports: false,
                log: false,
                numbersToExpressions: false,
                renameGlobals: false,
                rotateStringArray: true,
                seed: randomSeed,
                selfDefending: false,
                simplify: true,
                splitStrings: true,
                splitStringsChunkLength: 12,
                stringArray: true,
                stringArrayCallsTransform: false,
                stringArrayCallsTransformThreshold: 0.6,
                stringArrayEncoding: ['base64', 'rc4'],
                stringArrayIndexShift: true,
                stringArrayRotate: true,
                stringArrayShuffle: true,
                stringArrayWrappersCount: 1,
                stringArrayWrappersChainedCalls: false,
                stringArrayWrappersParametersMaxCount: 2,
                stringArrayWrappersType: 'variable',
                stringArrayThreshold: 0.7,
                target: 'node',
                ignoreImports: true,
                reservedNames: [
                    '^THREE$',
                    '^module$',
                    '^exports$',
                    '^require$',
                    '^window$',
                    '^document$',
                    '^process$'
                ],
                transformObjectKeys: false,
                unicodeEscapeSequence: false
            };
        }

        // BASIC security for huge files (1.4MB-2.1MB)
        if (isHuge) {
            return {
                compact: true,
                controlFlowFlattening: true,
                controlFlowFlatteningThreshold: 0.35,
                deadCodeInjection: false,
                deadCodeInjectionThreshold: 0,
                debugProtection: false,
                debugProtectionInterval: false,
                disableConsoleOutput: true,
                identifierNamesGenerator: 'hexadecimal',
                identifiersPrefix: '',
                ignoreRequireImports: false,
                log: false,
                numbersToExpressions: false,
                renameGlobals: false,
                rotateStringArray: false,
                seed: randomSeed,
                selfDefending: false,
                simplify: true,
                splitStrings: true,
                splitStringsChunkLength: 18,
                stringArray: true,
                stringArrayCallsTransform: false,
                stringArrayCallsTransformThreshold: 0.45,
                stringArrayEncoding: ['base64'],
                stringArrayIndexShift: false,
                stringArrayRotate: false,
                stringArrayShuffle: true,
                stringArrayWrappersCount: 1,
                stringArrayWrappersChainedCalls: false,
                stringArrayWrappersParametersMaxCount: 2,
                stringArrayWrappersType: 'variable',
                stringArrayThreshold: 0.6,
                target: 'node',
                ignoreImports: true,
                reservedNames: [
                    '^THREE$',
                    '^module$',
                    '^exports$',
                    '^require$',
                    '^window$',
                    '^document$',
                    '^process$'
                ],
                transformObjectKeys: false,
                unicodeEscapeSequence: false
            };
        }

        // Default fallback
        return {
            compact: true,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 0.75,
            disableConsoleOutput: true,
            identifierNamesGenerator: 'hexadecimal',
            log: false,
            renameGlobals: false,
            seed: randomSeed,
            selfDefending: true,
            simplify: true,
            stringArray: true,
            stringArrayEncoding: ['base64', 'rc4'],
            stringArrayThreshold: 0.85,
            target: 'node',
            ignoreImports: true,
            reservedNames: [
                '^THREE$',
                '^module$',
                '^exports$',
                '^require$',
                '^window$',
                '^document$',
                '^process$'
            ],
            transformObjectKeys: true
        };
    }

    // Track if obfuscator is loaded
    let obfuscatorLoaded = false;
    let obfuscatorLoading = false;
    const loadQueue = [];

    // Extract clean domain from any URL format
    function extractDomain(input) {
        if (!input || typeof input !== 'string') return '';
        
        let domain = input.trim().toLowerCase();
        domain = domain.replace(/^https?:\/\//, '');
        domain = domain.replace(/^www\./, '');
        domain = domain.split('/')[0];
        domain = domain.split(':')[0];
        domain = domain.split('?')[0];
        domain = domain.split('#')[0];
        
        return domain;
    }

    // Load JavaScriptObfuscator dynamically
    function loadObfuscator() {
        return new Promise(function(resolve, reject) {
            if (typeof window.JavaScriptObfuscator !== 'undefined') {
                obfuscatorLoaded = true;
                return resolve();
            }

            if (obfuscatorLoading) {
                loadQueue.push({ resolve: resolve, reject: reject });
                return;
            }

            obfuscatorLoading = true;

            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/javascript-obfuscator@4.1.0/dist/index.browser.js';
            script.async = true;

            script.onload = function() {
                obfuscatorLoaded = true;
                obfuscatorLoading = false;
                
                setTimeout(function() {
                    if (typeof window.JavaScriptObfuscator !== 'undefined') {
                        console.log('✓ JavaScriptObfuscator loaded and ready');
                        resolve();
                        
                        loadQueue.forEach(function(item) {
                            item.resolve();
                        });
                        loadQueue.length = 0;
                    } else {
                        console.error('✗ JavaScriptObfuscator script loaded but not available in window');
                        const error = new Error('JavaScriptObfuscator loaded but not available');
                        reject(error);
                        loadQueue.forEach(function(item) {
                            item.reject(error);
                        });
                        loadQueue.length = 0;
                    }
                }, 200);
            };

            script.onerror = function() {
                obfuscatorLoading = false;
                const error = new Error('Failed to load JavaScriptObfuscator library from CDN');
                reject(error);
                
                loadQueue.forEach(function(item) {
                    item.reject(error);
                });
                loadQueue.length = 0;
            };

            (document.head || document.documentElement).appendChild(script);
        });
    }

    function b64encode(str) {
        try {
            return btoa(unescape(encodeURIComponent(str)));
        } catch (e) {
            var bytes = new TextEncoder().encode(str);
            var binary = '';
            for (var i = 0; i < bytes.length; i++) {
                binary += String.fromCharCode(bytes[i]);
            }
            return btoa(binary);
        }
    }

    // Create domain lock wrapper if needed
    function createDomainLockWrapper(jsCode, options) {
        if (!options || !options.lockToDomain) {
            return jsCode;
        }

        var allowedDomains = Array.isArray(options.lockToDomain) ? options.lockToDomain : [options.lockToDomain];
        var encodedDomains = allowedDomains.map(function(d) {
            return b64encode(extractDomain(d));
        });

        var vars = {
            ext: '_' + Math.random().toString(36).substr(2, 8),
            dmc: '_' + Math.random().toString(36).substr(2, 8),
            dml: '_' + Math.random().toString(36).substr(2, 8),
            usr: '_' + Math.random().toString(36).substr(2, 8)
        };

        var wrapper = [];
        wrapper.push('(function(){');
        
        wrapper.push('function ' + vars.ext + '(d){if(!d)return "";d=d.trim().toLowerCase();d=d.replace(/^https?:\\/\\//,"");d=d.replace(/^www\\./,"");d=d.split("/")[0];d=d.split(":")[0];d=d.split("?")[0];d=d.split("#")[0];return d;}');
        
        wrapper.push('var ' + vars.dml + '=' + JSON.stringify(encodedDomains) + ';');
        wrapper.push('function ' + vars.dmc + '(){try{var c=' + vars.ext + '(window.location.hostname),m=false,i;for(i=0;i<' + vars.dml + '.length;i++){try{var a=atob(' + vars.dml + '[i]);if(c===a||c.endsWith("."+a)){m=true;break;}}catch(e){}}if(!m){document.body.innerHTML="<div style=\\"display:flex;align-items:center;justify-content:center;height:100vh;background:#1a1a1a;color:#ff4444;font-family:Arial,sans-serif;font-size:24px;font-weight:bold;text-align:center;padding:20px;\\">⚠️ Domain Lock Active - Unauthorized Domain</div>";throw new Error("Domain verification failed");}}catch(e){document.body.innerHTML="<div style=\\"display:flex;align-items:center;justify-content:center;height:100vh;background:#1a1a1a;color:#ff4444;font-family:Arial,sans-serif;font-size:24px;font-weight:bold;text-align:center;padding:20px;\\">⚠️ Security Check Failed</div>";throw e;}}');
        
        wrapper.push(vars.dmc + '();');
        
        wrapper.push('var ' + vars.usr + '=function(){');
        wrapper.push(jsCode);
        wrapper.push('};');
        
        wrapper.push('if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",function(){' + vars.usr + '();});}else{' + vars.usr + '();}');
        
        wrapper.push('})();');
        
        return wrapper.join('');
    }

    const JSProtector = {};

    JSProtector.protect = function(jsCode, options) {
        return new Promise(function(resolve, reject) {
            if (!jsCode || typeof jsCode !== 'string') {
                return reject(new Error('Invalid input: JavaScript code must be a non-empty string'));
            }

            // Check file size limit (2.1 MB)
            const maxSizeInBytes = 2.1 * 1024 * 1024;
            const codeSizeInBytes = new Blob([jsCode]).size;
            
            if (codeSizeInBytes > maxSizeInBytes) {
                const sizeInMB = (codeSizeInBytes / (1024 * 1024)).toFixed(2);
                return reject(new Error('File size (' + sizeInMB + ' MB) exceeds maximum limit of 2.1 MB'));
            }

            const sizeInKB = (codeSizeInBytes / 1024).toFixed(2);
            console.log('ℹ️ Processing file: ' + sizeInKB + ' KB');

            // Validate domains if provided
            if (options && options.lockToDomain) {
                var domains = Array.isArray(options.lockToDomain) ? options.lockToDomain : [options.lockToDomain];
                for (var i = 0; i < domains.length; i++) {
                    if (typeof domains[i] !== 'string' || domains[i].trim() === '') {
                        return reject(new Error('Invalid domain: All domains must be non-empty strings'));
                    }
                    var cleanDomain = extractDomain(domains[i]);
                    if (!cleanDomain) {
                        return reject(new Error('Invalid domain format: ' + domains[i]));
                    }
                }
            }

            if (typeof JavaScriptObfuscator !== 'undefined') {
                console.log('ℹ️ Using already loaded JavaScriptObfuscator');
                try {
                    var wrappedCode = createDomainLockWrapper(jsCode, options);
                    var obfuscationSettings = getAdvancedObfuscationOptions(wrappedCode.length);
                    console.log('ℹ️ Applying obfuscation profile for ' + sizeInKB + ' KB file');
                    var obfuscationResult = JavaScriptObfuscator.obfuscate(wrappedCode, obfuscationSettings);
                    resolve(obfuscationResult.getObfuscatedCode());
                } catch (error) {
                    reject(error);
                }
                return;
            }

            console.log('ℹ️ Loading JavaScriptObfuscator dynamically...');
            loadObfuscator()
                .then(function() {
                    try {
                        var wrappedCode = createDomainLockWrapper(jsCode, options);
                        var obfuscationSettings = getAdvancedObfuscationOptions(wrappedCode.length);
                        console.log('ℹ️ Applying obfuscation profile for ' + sizeInKB + ' KB file');
                        var obfuscationResult = JavaScriptObfuscator.obfuscate(wrappedCode, obfuscationSettings);
                        resolve(obfuscationResult.getObfuscatedCode());
                    } catch (error) {
                        reject(error);
                    }
                })
                .catch(function(error) {
                    reject(error);
                });
        });
    };

    // Auto-load obfuscator on script load
    if (typeof window.JavaScriptObfuscator === 'undefined') {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                loadObfuscator().catch(function(err) {
                    console.warn('Failed to preload JavaScriptObfuscator:', err.message);
                });
            });
        } else {
            setTimeout(function() {
                loadObfuscator().catch(function(err) {
                    console.warn('Failed to preload JavaScriptObfuscator:', err.message);
                });
            }, 0);
        }
    }

    window.JSProtector = JSProtector;

})(window);