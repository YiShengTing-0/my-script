(function (_Scratch) {
    const { ArgumentType, BlockType, translate, extensions, runtime } = _Scratch;

    // 🌍 多语言
    translate.setup({
        zh: {
            'extensionName': '文件',
            'getFile': '读取文件[file]',
            'getFileManual': '读取文件[file]',
            'isEmpty': '文件[file]为空',
            'getFileInfo': '文件[file]的[filemenu]',
            'lineCount': '文件[file]的总行数',
            'getLine': '文件[file]的第[line]行',
            'fileExists': '文件[file]存在？',
            'substring': '[text]的第[from]到[to]个字符',
            'toUpper': '[text]全部大写',
            'toLower': '[text]全部小写',
            'trim': '去除[text]首尾空格',
            'replace': '[text]中[old]替换为[new]',
            'length': '[text]的长度',
            'contains': '[text]包含[sub]？',
            'startsWith': '[text]以[sub]开头？',
            'endsWith': '[text]以[sub]结尾？',
            'indexOf': '[sub]在[text]中的位置',
            'count': '[text]出现[sub]的次数',
            'jsonGet': '解析JSON[text]的[key]',
            'isJson': '[text]是有效JSON？',
            'toJson': '[list]转JSON',
            'toBase64': '[text]转Base64',
            'fromBase64': 'Base64[text]解码',
            'urlEncode': '[text]URL编码',
            'urlDecode': 'URL[text]解码',
            'randomInt': '随机整数[from]到[to]',
            'isNumber': '[text]是数字？',
            'timestamp': '当前时间戳',
            'name': '名字',
            'ext': '后缀',
            'path': '路径',
            'size': '大小',
            'text': '文本',
            'number': '数字',
        },
        en: {
            'extensionName': 'File',
            'getFile': 'read file[file]',
            'getFileManual': 'read file[file]',
            'isEmpty': 'file[file] is empty',
            'getFileInfo': 'file[file]\'s [filemenu]',
            'lineCount': 'total lines of file[file]',
            'getLine': 'line[line] of file[file]',
            'fileExists': 'file[file] exists?',
            'substring': 'chars [from] to [to] of [text]',
            'toUpper': '[text] to UPPERCASE',
            'toLower': '[text] to lowercase',
            'trim': 'trim [text]',
            'replace': 'replace [old] with [new] in [text]',
            'length': 'length of [text]',
            'contains': '[text] contains [sub]?',
            'startsWith': '[text] starts with [sub]?',
            'endsWith': '[text] ends with [sub]?',
            'indexOf': 'index of [sub] in [text]',
            'count': 'count of [sub] in [text]',
            'jsonGet': 'parse JSON [text]\'s [key]',
            'isJson': '[text] is valid JSON?',
            'toJson': '[list] to JSON',
            'toBase64': '[text] to Base64',
            'fromBase64': 'decode Base64 [text]',
            'urlEncode': 'URL encode [text]',
            'urlDecode': 'URL decode [text]',
            'randomInt': 'random integer [from] to [to]',
            'isNumber': '[text] is number?',
            'timestamp': 'current timestamp',
            'name': 'name',
            'ext': 'extension',
            'path': 'path',
            'size': 'size',
            'text': 'text',
            'number': 'number',
        }
    });

    const lang = (id) => translate({ id: id });

    class FileExtension {
        constructor(runtime) {
            this.runtime = runtime;
        }

        getInfo() {
            return {
                id: "FilesExtension",
                color1: '#FCD53F',
                color2: '#E0B92E',
                color3: '#FCD53F',
                name: lang("extensionName"),
                blocks: [
                    // ========== 📂 基础文件操作 ==========
                    {
                        opcode: 'getFile',
                        blockType: BlockType.REPORTER,
                        disableMonitor: true,
                        text: lang("getFile"),
                        arguments: {
                            file: { type: ArgumentType.STRING, menu: 'files' },
                        },
                    },
                    {
                        opcode: 'getFileManual',
                        blockType: BlockType.REPORTER,
                        disableMonitor: true,
                        text: lang("getFileManual"),
                        arguments: {
                            file: { type: ArgumentType.STRING, defaultValue: 'extension.js' },
                        },
                    },
                    {
                        opcode: 'isEmpty',
                        blockType: BlockType.BOOLEAN,
                        disableMonitor: true,
                        text: lang("isEmpty"),
                        arguments: {
                            file: { type: ArgumentType.STRING, menu: 'files' },
                        },
                    },
                    {
                        opcode: 'fileExists',
                        blockType: BlockType.BOOLEAN,
                        disableMonitor: true,
                        text: lang("fileExists"),
                        arguments: {
                            file: { type: ArgumentType.STRING, menu: 'files' },
                        },
                    },
                    {
                        opcode: 'getFileInfo',
                        blockType: BlockType.REPORTER,
                        disableMonitor: true,
                        text: lang("getFileInfo"),
                        arguments: {
                            file: { type: ArgumentType.STRING, menu: 'files' },
                            filemenu: { type: ArgumentType.STRING, menu: 'FILE_INFO_MENU' },
                        },
                    },
                    {
                        opcode: 'lineCount',
                        blockType: BlockType.REPORTER,
                        disableMonitor: true,
                        text: lang("lineCount"),
                        arguments: {
                            file: { type: ArgumentType.STRING, menu: 'files' },
                        },
                    },
                    {
                        opcode: 'getLine',
                        blockType: BlockType.REPORTER,
                        disableMonitor: true,
                        text: lang("getLine"),
                        arguments: {
                            file: { type: ArgumentType.STRING, menu: 'files' },
                            line: { type: ArgumentType.NUMBER, defaultValue: 1 },
                        },
                    },

                    // ========== 📝 文本处理 ==========
                    {
                        opcode: 'substring',
                        blockType: BlockType.REPORTER,
                        disableMonitor: true,
                        text: lang("substring"),
                        arguments: {
                            text: { type: ArgumentType.STRING, defaultValue: 'hello' },
                            from: { type: ArgumentType.NUMBER, defaultValue: 1 },
                            to: { type: ArgumentType.NUMBER, defaultValue: 3 },
                        },
                    },
                    {
                        opcode: 'toUpper',
                        blockType: BlockType.REPORTER,
                        disableMonitor: true,
                        text: lang("toUpper"),
                        arguments: {
                            text: { type: ArgumentType.STRING, defaultValue: 'hello' },
                        },
                    },
                    {
                        opcode: 'toLower',
                        blockType: BlockType.REPORTER,
                        disableMonitor: true,
                        text: lang("toLower"),
                        arguments: {
                            text: { type: ArgumentType.STRING, defaultValue: 'HELLO' },
                        },
                    },
                    {
                        opcode: 'trim',
                        blockType: BlockType.REPORTER,
                        disableMonitor: true,
                        text: lang("trim"),
                        arguments: {
                            text: { type: ArgumentType.STRING, defaultValue: '  hello  ' },
                        },
                    },
                    {
                        opcode: 'replace',
                        blockType: BlockType.REPORTER,
                        disableMonitor: true,
                        text: lang("replace"),
                        arguments: {
                            text: { type: ArgumentType.STRING, defaultValue: 'hello world' },
                            old: { type: ArgumentType.STRING, defaultValue: 'world' },
                            new: { type: ArgumentType.STRING, defaultValue: 'scratch' },
                        },
                    },
                    {
                        opcode: 'length',
                        blockType: BlockType.REPORTER,
                        disableMonitor: true,
                        text: lang("length"),
                        arguments: {
                            text: { type: ArgumentType.STRING, defaultValue: 'hello' },
                        },
                    },

                    // ========== 🔍 查找判断 ==========
                    {
                        opcode: 'contains',
                        blockType: BlockType.BOOLEAN,
                        disableMonitor: true,
                        text: lang("contains"),
                        arguments: {
                            text: { type: ArgumentType.STRING, defaultValue: 'hello world' },
                            sub: { type: ArgumentType.STRING, defaultValue: 'world' },
                        },
                    },
                    {
                        opcode: 'startsWith',
                        blockType: BlockType.BOOLEAN,
                        disableMonitor: true,
                        text: lang("startsWith"),
                        arguments: {
                            text: { type: ArgumentType.STRING, defaultValue: 'hello world' },
                            sub: { type: ArgumentType.STRING, defaultValue: 'hello' },
                        },
                    },
                    {
                        opcode: 'endsWith',
                        blockType: BlockType.BOOLEAN,
                        disableMonitor: true,
                        text: lang("endsWith"),
                        arguments: {
                            text: { type: ArgumentType.STRING, defaultValue: 'hello world' },
                            sub: { type: ArgumentType.STRING, defaultValue: 'world' },
                        },
                    },
                    {
                        opcode: 'indexOf',
                        blockType: BlockType.REPORTER,
                        disableMonitor: true,
                        text: lang("indexOf"),
                        arguments: {
                            text: { type: ArgumentType.STRING, defaultValue: 'hello world' },
                            sub: { type: ArgumentType.STRING, defaultValue: 'world' },
                        },
                    },
                    {
                        opcode: 'count',
                        blockType: BlockType.REPORTER,
                        disableMonitor: true,
                        text: lang("count"),
                        arguments: {
                            text: { type: ArgumentType.STRING, defaultValue: 'hello hello' },
                            sub: { type: ArgumentType.STRING, defaultValue: 'hello' },
                        },
                    },

                    // ========== 🧩 JSON 操作 ==========
                    {
                        opcode: 'jsonGet',
                        blockType: BlockType.REPORTER,
                        disableMonitor: true,
                        text: lang("jsonGet"),
                        arguments: {
                            text: { type: ArgumentType.STRING, defaultValue: '{"name":"Tom"}' },
                            key: { type: ArgumentType.STRING, defaultValue: 'name' },
                        },
                    },
                    {
                        opcode: 'isJson',
                        blockType: BlockType.BOOLEAN,
                        disableMonitor: true,
                        text: lang("isJson"),
                        arguments: {
                            text: { type: ArgumentType.STRING, defaultValue: '{"a":1}' },
                        },
                    },
                    {
                        opcode: 'toJson',
                        blockType: BlockType.REPORTER,
                        disableMonitor: true,
                        text: lang("toJson"),
                        arguments: {
                            list: { type: ArgumentType.STRING, defaultValue: 'a,b,c' },
                            mode: { type: ArgumentType.STRING, menu: 'JSON_MODE' },
                        },
                    },

                    // ========== 🔐 编码解码 ==========
                    {
                        opcode: 'toBase64',
                        blockType: BlockType.REPORTER,
                        disableMonitor: true,
                        text: lang("toBase64"),
                        arguments: {
                            text: { type: ArgumentType.STRING, defaultValue: 'hello' },
                        },
                    },
                    {
                        opcode: 'fromBase64',
                        blockType: BlockType.REPORTER,
                        disableMonitor: true,
                        text: lang("fromBase64"),
                        arguments: {
                            text: { type: ArgumentType.STRING, defaultValue: 'aGVsbG8=' },
                        },
                    },
                    {
                        opcode: 'urlEncode',
                        blockType: BlockType.REPORTER,
                        disableMonitor: true,
                        text: lang("urlEncode"),
                        arguments: {
                            text: { type: ArgumentType.STRING, defaultValue: 'hello world' },
                        },
                    },
                    {
                        opcode: 'urlDecode',
                        blockType: BlockType.REPORTER,
                        disableMonitor: true,
                        text: lang("urlDecode"),
                        arguments: {
                            text: { type: ArgumentType.STRING, defaultValue: 'hello%20world' },
                        },
                    },

                    // ========== 🎲 其他实用 ==========
                    {
                        opcode: 'randomInt',
                        blockType: BlockType.REPORTER,
                        disableMonitor: true,
                        text: lang("randomInt"),
                        arguments: {
                            from: { type: ArgumentType.NUMBER, defaultValue: 1 },
                            to: { type: ArgumentType.NUMBER, defaultValue: 10 },
                        },
                    },
                    {
                        opcode: 'isNumber',
                        blockType: BlockType.BOOLEAN,
                        disableMonitor: true,
                        text: lang("isNumber"),
                        arguments: {
                            text: { type: ArgumentType.STRING, defaultValue: '123' },
                        },
                    },
                    {
                        opcode: 'timestamp',
                        blockType: BlockType.REPORTER,
                        disableMonitor: true,
                        text: lang("timestamp"),
                    },
                ],

                menus: {
                    files: {
                        acceptReporters: true,
                        items: 'buildFileListMenu',
                    },
                    FILE_INFO_MENU: {
                        acceptReporters: true,
                        items: [
                            { text: lang('name'), value: 'name' },
                            { text: lang('ext'), value: 'ext' },
                            { text: lang('path'), value: 'path' },
                            { text: lang('size'), value: 'size' },
                        ],
                    },
                    JSON_MODE: {
                        acceptReporters: true,
                        items: [
                            { text: lang('text'), value: 'text' },
                            { text: lang('number'), value: 'number' },
                        ],
                    },
                },
            };
        }

        // ==================== 🏗️ 路径处理 ====================
        _getFullPath(f) {
            if (f.path) return f.path;
            const parts = [];
            if (f.targetName) parts.push(f.targetName);
            parts.push(f.fullName);
            return parts.filter(Boolean).join('/');
        }

        buildFileListMenu() {
            const list = this.runtime.getGandiAssetsFileList(undefined) || [];
            const menu = list.map((f) => {
                const fullPath = this._getFullPath(f);
                return { text: fullPath, value: fullPath };
            });
            if (menu.length === 0) return [{ text: false, value: '' }];
            return menu;
        }

        _findFileByPath(path) {
            const list = this.runtime.getGandiAssetsFileList(undefined) || [];
            return list.find((f) => {
                const fullPath = this._getFullPath(f);
                return fullPath === path || f.fullName === path;
            });
        }

        // ==================== 📂 文件读取核心 ====================
        _readFile(path) {
            if (!path) return '';
            try {
                let asset = this.runtime.getGandiAssetContent(path);
                if (!asset) {
                    const f = this._findFileByPath(path);
                    if (f) {
                        const tryKeys = [f.path, f.fullName, f.id, f.md5ext].filter(Boolean);
                        for (const key of tryKeys) {
                            asset = this.runtime.getGandiAssetContent(key);
                            if (asset) break;
                        }
                    }
                }
                if (asset && typeof asset.decodeText === 'function') {
                    return asset.decodeText();
                }
            } catch (e) {
                console.error('❌ 读取失败:', e);
            }
            return '';
        }

        // ==================== 📂 基础文件操作 ====================
        getFile(args) { return this._readFile(args.file); }
        getFileManual(args) { return this._readFile(args.file); }

        isEmpty(args) {
            const content = this._readFile(args.file);
            return content === '' || content === null || content === undefined;
        }

        fileExists(args) {
            const f = this._findFileByPath(args.file);
            return !!f;
        }

        getFileInfo(args) {
            const f = this._findFileByPath(args.file);
            if (!f) return '';

            if (args.filemenu === 'path') return this._getFullPath(f);

            if (args.filemenu === 'size') {
                // 尝试多种 size 字段
                if (f.size !== undefined) return f.size;
                if (f.asset && f.asset.size !== undefined) return f.asset.size;
                // 兜底：读内容算长度
                return this._readFile(args.file).length;
            }

            const fullFileName = f.fullName || '';
            const dotIndex = fullFileName.lastIndexOf('.');

            if (args.filemenu === 'name') {
                if (f.name && !f.name.includes('.')) return f.name;
                return dotIndex > 0 ? fullFileName.substring(0, dotIndex) : fullFileName;
            } else if (args.filemenu === 'ext') {
                return (dotIndex > 0 && dotIndex < fullFileName.length - 1)
                    ? fullFileName.substring(dotIndex + 1)
                    : '';
            }
            return '';
        }

        lineCount(args) {
            const content = this._readFile(args.file);
            if (!content) return 0;
            return content.split(/\r\n|\r|\n/).length;
        }

        getLine(args) {
            const content = this._readFile(args.file);
            if (!content) return '';
            const lineNum = Number(args.line);
            if (isNaN(lineNum) || lineNum < 1) return '';
            const lines = content.split(/\r\n|\r|\n/);
            const index = Math.floor(lineNum) - 1;
            return (index >= 0 && index < lines.length) ? lines[index] : '';
        }

        // ==================== 📝 文本处理 ====================
        substring(args) {
            const text = String(args.text ?? '');
            const from = Number(args.from);
            const to = Number(args.to);
            if (isNaN(from) || isNaN(to)) return '';
            // Scratch 习惯：从 1 开始
            return text.substring(from - 1, to);
        }

        toUpper(args) { return String(args.text ?? '').toUpperCase(); }
        toLower(args) { return String(args.text ?? '').toLowerCase(); }
        trim(args) { return String(args.text ?? '').trim(); }

        replace(args) {
            const text = String(args.text ?? '');
            const oldStr = String(args.old ?? '');
            const newStr = String(args.new ?? '');
            if (!oldStr) return text;
            // 全部替换
            return text.split(oldStr).join(newStr);
        }

        length(args) { return String(args.text ?? '').length; }

        // ==================== 🔍 查找判断 ====================
        contains(args) {
            return String(args.text ?? '').includes(String(args.sub ?? ''));
        }

        startsWith(args) {
            return String(args.text ?? '').startsWith(String(args.sub ?? ''));
        }

        endsWith(args) {
            return String(args.text ?? '').endsWith(String(args.sub ?? ''));
        }

        indexOf(args) {
            const text = String(args.text ?? '');
            const sub = String(args.sub ?? '');
            const idx = text.indexOf(sub);
            return idx === -1 ? -1 : idx + 1;  // 1-based
        }

        count(args) {
            const text = String(args.text ?? '');
            const sub = String(args.sub ?? '');
            if (!sub) return 0;
            return text.split(sub).length - 1;
        }

        // ==================== 🧩 JSON 操作 ====================
        jsonGet(args) {
            try {
                const obj = JSON.parse(String(args.text ?? ''));
                const key = String(args.key ?? '');
                // 支持嵌套：a.b.c
                const keys = key.split('.');
                let result = obj;
                for (const k of keys) {
                    if (result === undefined || result === null) return '';
                    // 支持数组下标 [0]
                    const arrayMatch = k.match(/^(\w+)\[(\d+)\]$/);
                    if (arrayMatch) {
                        result = result[arrayMatch[1]]?.[Number(arrayMatch[2])];
                    } else {
                        result = result[k];
                    }
                }
                if (typeof result === 'object') return JSON.stringify(result);
                return result ?? '';
            } catch (e) {
                return '';
            }
        }

        isJson(args) {
            try {
                JSON.parse(String(args.text ?? ''));
                return true;
            } catch (e) {
                return false;
            }
        }

        toJson(args) {
            const list = String(args.list ?? '');
            const mode = args.mode || 'text';
            const arr = list.split(',').map((s) => s.trim());
            if (mode === 'number') {
                return JSON.stringify(arr.map((s) => {
                    const n = Number(s);
                    return isNaN(n) ? s : n;
                }));
            }
            return JSON.stringify(arr);
        }

        // ==================== 🔐 编码解码 ====================
        toBase64(args) {
            try {
                const text = String(args.text ?? '');
                // 支持中文
                return btoa(unescape(encodeURIComponent(text)));
            } catch (e) {
                return '';
            }
        }

        fromBase64(args) {
            try {
                const text = String(args.text ?? '');
                return decodeURIComponent(escape(atob(text)));
            } catch (e) {
                return '';
            }
        }

        urlEncode(args) {
            try {
                return encodeURIComponent(String(args.text ?? ''));
            } catch (e) {
                return '';
            }
        }

        urlDecode(args) {
            try {
                return decodeURIComponent(String(args.text ?? ''));
            } catch (e) {
                return '';
            }
        }

        // ==================== 🎲 其他实用 ====================
        randomInt(args) {
            const from = Math.ceil(Number(args.from));
            const to = Math.floor(Number(args.to));
            if (isNaN(from) || isNaN(to) || from > to) return 0;
            return Math.floor(Math.random() * (to - from + 1)) + from;
        }

        isNumber(args) {
            const text = String(args.text ?? '').trim();
            if (text === '') return false;
            return !isNaN(Number(text));
        }

        timestamp() {
            return Date.now();
        }
    }

    extensions.register(new FileExtension(runtime));

}(Scratch));
