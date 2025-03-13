(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/[root of the server]__cb7eec._.js", {

"[turbopack]/browser/dev/hmr-client/websocket.ts [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// Adapted from https://github.com/vercel/next.js/blob/canary/packages/next/src/client/dev/error-overlay/websocket.ts
__turbopack_esm__({
    "addMessageListener": (()=>addMessageListener),
    "connectHMR": (()=>connectHMR),
    "sendMessage": (()=>sendMessage)
});
let source;
const eventCallbacks = [];
// TODO: add timeout again
// let lastActivity = Date.now()
function getSocketProtocol(assetPrefix) {
    let protocol = location.protocol;
    try {
        // assetPrefix is a url
        protocol = new URL(assetPrefix).protocol;
    } catch (_) {}
    return protocol === "http:" ? "ws" : "wss";
}
function addMessageListener(cb) {
    eventCallbacks.push(cb);
}
function sendMessage(data) {
    if (!source || source.readyState !== source.OPEN) return;
    return source.send(data);
}
function connectHMR(options) {
    const { timeout = 5 * 1000 } = options;
    function init() {
        if (source) source.close();
        console.log("[HMR] connecting...");
        function handleOnline() {
            const connected = {
                type: "turbopack-connected"
            };
            eventCallbacks.forEach((cb)=>{
                cb(connected);
            });
            if (options.log) console.log("[HMR] connected");
        // lastActivity = Date.now()
        }
        function handleMessage(event) {
            // lastActivity = Date.now()
            const message = {
                type: "turbopack-message",
                data: JSON.parse(event.data)
            };
            eventCallbacks.forEach((cb)=>{
                cb(message);
            });
        }
        // let timer: NodeJS.Timeout
        function handleDisconnect() {
            source.close();
            setTimeout(init, timeout);
        }
        const { hostname, port } = location;
        const protocol = getSocketProtocol(options.assetPrefix || "");
        const assetPrefix = options.assetPrefix.replace(/^\/+/, "");
        let url = `${protocol}://${hostname}:${port}${assetPrefix ? `/${assetPrefix}` : ""}`;
        if (assetPrefix.startsWith("http")) {
            url = `${protocol}://${assetPrefix.split("://")[1]}`;
        }
        source = new window.WebSocket(`${url}${options.path}`);
        source.onopen = handleOnline;
        source.onerror = handleDisconnect;
        source.onmessage = handleMessage;
    }
    init();
}
}}),
"[turbopack]/browser/dev/hmr-client/hmr-client.ts [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/// <reference path="../../../shared/runtime-types.d.ts" />
/// <reference path="../../runtime/base/dev-globals.d.ts" />
/// <reference path="../../runtime/base/dev-protocol.d.ts" />
/// <reference path="../../runtime/base/dev-extensions.ts" />
__turbopack_esm__({
    "connect": (()=>connect),
    "setHooks": (()=>setHooks),
    "subscribeToUpdate": (()=>subscribeToUpdate)
});
var __TURBOPACK__imported__module__$5b$turbopack$5d2f$browser$2f$dev$2f$hmr$2d$client$2f$websocket$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[turbopack]/browser/dev/hmr-client/websocket.ts [client] (ecmascript)");
;
function connect({ // TODO(WEB-1465) Remove this backwards compat fallback once
// vercel/next.js#54586 is merged.
addMessageListener = __TURBOPACK__imported__module__$5b$turbopack$5d2f$browser$2f$dev$2f$hmr$2d$client$2f$websocket$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["addMessageListener"], // TODO(WEB-1465) Remove this backwards compat fallback once
// vercel/next.js#54586 is merged.
sendMessage = __TURBOPACK__imported__module__$5b$turbopack$5d2f$browser$2f$dev$2f$hmr$2d$client$2f$websocket$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["sendMessage"], onUpdateError = console.error }) {
    addMessageListener((msg)=>{
        switch(msg.type){
            case "turbopack-connected":
                handleSocketConnected(sendMessage);
                break;
            default:
                try {
                    if (Array.isArray(msg.data)) {
                        for(let i = 0; i < msg.data.length; i++){
                            handleSocketMessage(msg.data[i]);
                        }
                    } else {
                        handleSocketMessage(msg.data);
                    }
                    applyAggregatedUpdates();
                } catch (e) {
                    console.warn("[Fast Refresh] performing full reload\n\n" + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + "You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n" + "Consider migrating the non-React component export to a separate file and importing it into both files.\n\n" + "It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n" + "Fast Refresh requires at least one parent function component in your React tree.");
                    onUpdateError(e);
                    location.reload();
                }
                break;
        }
    });
    const queued = globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS;
    if (queued != null && !Array.isArray(queued)) {
        throw new Error("A separate HMR handler was already registered");
    }
    globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS = {
        push: ([chunkPath, callback])=>{
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    };
    if (Array.isArray(queued)) {
        for (const [chunkPath, callback] of queued){
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    }
}
const updateCallbackSets = new Map();
function sendJSON(sendMessage, message) {
    sendMessage(JSON.stringify(message));
}
function resourceKey(resource) {
    return JSON.stringify({
        path: resource.path,
        headers: resource.headers || null
    });
}
function subscribeToUpdates(sendMessage, resource) {
    sendJSON(sendMessage, {
        type: "turbopack-subscribe",
        ...resource
    });
    return ()=>{
        sendJSON(sendMessage, {
            type: "turbopack-unsubscribe",
            ...resource
        });
    };
}
function handleSocketConnected(sendMessage) {
    for (const key of updateCallbackSets.keys()){
        subscribeToUpdates(sendMessage, JSON.parse(key));
    }
}
// we aggregate all pending updates until the issues are resolved
const chunkListsWithPendingUpdates = new Map();
function aggregateUpdates(msg) {
    const key = resourceKey(msg.resource);
    let aggregated = chunkListsWithPendingUpdates.get(key);
    if (aggregated) {
        aggregated.instruction = mergeChunkListUpdates(aggregated.instruction, msg.instruction);
    } else {
        chunkListsWithPendingUpdates.set(key, msg);
    }
}
function applyAggregatedUpdates() {
    if (chunkListsWithPendingUpdates.size === 0) return;
    hooks.beforeRefresh();
    for (const msg of chunkListsWithPendingUpdates.values()){
        triggerUpdate(msg);
    }
    chunkListsWithPendingUpdates.clear();
    finalizeUpdate();
}
function mergeChunkListUpdates(updateA, updateB) {
    let chunks;
    if (updateA.chunks != null) {
        if (updateB.chunks == null) {
            chunks = updateA.chunks;
        } else {
            chunks = mergeChunkListChunks(updateA.chunks, updateB.chunks);
        }
    } else if (updateB.chunks != null) {
        chunks = updateB.chunks;
    }
    let merged;
    if (updateA.merged != null) {
        if (updateB.merged == null) {
            merged = updateA.merged;
        } else {
            // Since `merged` is an array of updates, we need to merge them all into
            // one, consistent update.
            // Since there can only be `EcmascriptMergeUpdates` in the array, there is
            // no need to key on the `type` field.
            let update = updateA.merged[0];
            for(let i = 1; i < updateA.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateA.merged[i]);
            }
            for(let i = 0; i < updateB.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateB.merged[i]);
            }
            merged = [
                update
            ];
        }
    } else if (updateB.merged != null) {
        merged = updateB.merged;
    }
    return {
        type: "ChunkListUpdate",
        chunks,
        merged
    };
}
function mergeChunkListChunks(chunksA, chunksB) {
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    return chunks;
}
function mergeChunkUpdates(updateA, updateB) {
    if (updateA.type === "added" && updateB.type === "deleted" || updateA.type === "deleted" && updateB.type === "added") {
        return undefined;
    }
    if (updateA.type === "partial") {
        invariant(updateA.instruction, "Partial updates are unsupported");
    }
    if (updateB.type === "partial") {
        invariant(updateB.instruction, "Partial updates are unsupported");
    }
    return undefined;
}
function mergeChunkListEcmascriptMergedUpdates(mergedA, mergedB) {
    const entries = mergeEcmascriptChunkEntries(mergedA.entries, mergedB.entries);
    const chunks = mergeEcmascriptChunksUpdates(mergedA.chunks, mergedB.chunks);
    return {
        type: "EcmascriptMergedUpdate",
        entries,
        chunks
    };
}
function mergeEcmascriptChunkEntries(entriesA, entriesB) {
    return {
        ...entriesA,
        ...entriesB
    };
}
function mergeEcmascriptChunksUpdates(chunksA, chunksB) {
    if (chunksA == null) {
        return chunksB;
    }
    if (chunksB == null) {
        return chunksA;
    }
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeEcmascriptChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    if (Object.keys(chunks).length === 0) {
        return undefined;
    }
    return chunks;
}
function mergeEcmascriptChunkUpdates(updateA, updateB) {
    if (updateA.type === "added" && updateB.type === "deleted") {
        // These two completely cancel each other out.
        return undefined;
    }
    if (updateA.type === "deleted" && updateB.type === "added") {
        const added = [];
        const deleted = [];
        const deletedModules = new Set(updateA.modules ?? []);
        const addedModules = new Set(updateB.modules ?? []);
        for (const moduleId of addedModules){
            if (!deletedModules.has(moduleId)) {
                added.push(moduleId);
            }
        }
        for (const moduleId of deletedModules){
            if (!addedModules.has(moduleId)) {
                deleted.push(moduleId);
            }
        }
        if (added.length === 0 && deleted.length === 0) {
            return undefined;
        }
        return {
            type: "partial",
            added,
            deleted
        };
    }
    if (updateA.type === "partial" && updateB.type === "partial") {
        const added = new Set([
            ...updateA.added ?? [],
            ...updateB.added ?? []
        ]);
        const deleted = new Set([
            ...updateA.deleted ?? [],
            ...updateB.deleted ?? []
        ]);
        if (updateB.added != null) {
            for (const moduleId of updateB.added){
                deleted.delete(moduleId);
            }
        }
        if (updateB.deleted != null) {
            for (const moduleId of updateB.deleted){
                added.delete(moduleId);
            }
        }
        return {
            type: "partial",
            added: [
                ...added
            ],
            deleted: [
                ...deleted
            ]
        };
    }
    if (updateA.type === "added" && updateB.type === "partial") {
        const modules = new Set([
            ...updateA.modules ?? [],
            ...updateB.added ?? []
        ]);
        for (const moduleId of updateB.deleted ?? []){
            modules.delete(moduleId);
        }
        return {
            type: "added",
            modules: [
                ...modules
            ]
        };
    }
    if (updateA.type === "partial" && updateB.type === "deleted") {
        // We could eagerly return `updateB` here, but this would potentially be
        // incorrect if `updateA` has added modules.
        const modules = new Set(updateB.modules ?? []);
        if (updateA.added != null) {
            for (const moduleId of updateA.added){
                modules.delete(moduleId);
            }
        }
        return {
            type: "deleted",
            modules: [
                ...modules
            ]
        };
    }
    // Any other update combination is invalid.
    return undefined;
}
function invariant(_, message) {
    throw new Error(`Invariant: ${message}`);
}
const CRITICAL = [
    "bug",
    "error",
    "fatal"
];
function compareByList(list, a, b) {
    const aI = list.indexOf(a) + 1 || list.length;
    const bI = list.indexOf(b) + 1 || list.length;
    return aI - bI;
}
const chunksWithIssues = new Map();
function emitIssues() {
    const issues = [];
    const deduplicationSet = new Set();
    for (const [_, chunkIssues] of chunksWithIssues){
        for (const chunkIssue of chunkIssues){
            if (deduplicationSet.has(chunkIssue.formatted)) continue;
            issues.push(chunkIssue);
            deduplicationSet.add(chunkIssue.formatted);
        }
    }
    sortIssues(issues);
    hooks.issues(issues);
}
function handleIssues(msg) {
    const key = resourceKey(msg.resource);
    let hasCriticalIssues = false;
    for (const issue of msg.issues){
        if (CRITICAL.includes(issue.severity)) {
            hasCriticalIssues = true;
        }
    }
    if (msg.issues.length > 0) {
        chunksWithIssues.set(key, msg.issues);
    } else if (chunksWithIssues.has(key)) {
        chunksWithIssues.delete(key);
    }
    emitIssues();
    return hasCriticalIssues;
}
const SEVERITY_ORDER = [
    "bug",
    "fatal",
    "error",
    "warning",
    "info",
    "log"
];
const CATEGORY_ORDER = [
    "parse",
    "resolve",
    "code generation",
    "rendering",
    "typescript",
    "other"
];
function sortIssues(issues) {
    issues.sort((a, b)=>{
        const first = compareByList(SEVERITY_ORDER, a.severity, b.severity);
        if (first !== 0) return first;
        return compareByList(CATEGORY_ORDER, a.category, b.category);
    });
}
const hooks = {
    beforeRefresh: ()=>{},
    refresh: ()=>{},
    buildOk: ()=>{},
    issues: (_issues)=>{}
};
function setHooks(newHooks) {
    Object.assign(hooks, newHooks);
}
function handleSocketMessage(msg) {
    sortIssues(msg.issues);
    handleIssues(msg);
    switch(msg.type){
        case "issues":
            break;
        case "partial":
            // aggregate updates
            aggregateUpdates(msg);
            break;
        default:
            // run single update
            const runHooks = chunkListsWithPendingUpdates.size === 0;
            if (runHooks) hooks.beforeRefresh();
            triggerUpdate(msg);
            if (runHooks) finalizeUpdate();
            break;
    }
}
function finalizeUpdate() {
    hooks.refresh();
    hooks.buildOk();
    // This is used by the Next.js integration test suite to notify it when HMR
    // updates have been completed.
    // TODO: Only run this in test environments (gate by `process.env.__NEXT_TEST_MODE`)
    if (globalThis.__NEXT_HMR_CB) {
        globalThis.__NEXT_HMR_CB();
        globalThis.__NEXT_HMR_CB = null;
    }
}
function subscribeToChunkUpdate(chunkPath, sendMessage, callback) {
    return subscribeToUpdate({
        path: chunkPath
    }, sendMessage, callback);
}
function subscribeToUpdate(resource, sendMessage, callback) {
    // TODO(WEB-1465) Remove this backwards compat fallback once
    // vercel/next.js#54586 is merged.
    if (callback === undefined) {
        callback = sendMessage;
        sendMessage = __TURBOPACK__imported__module__$5b$turbopack$5d2f$browser$2f$dev$2f$hmr$2d$client$2f$websocket$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["sendMessage"];
    }
    const key = resourceKey(resource);
    let callbackSet;
    const existingCallbackSet = updateCallbackSets.get(key);
    if (!existingCallbackSet) {
        callbackSet = {
            callbacks: new Set([
                callback
            ]),
            unsubscribe: subscribeToUpdates(sendMessage, resource)
        };
        updateCallbackSets.set(key, callbackSet);
    } else {
        existingCallbackSet.callbacks.add(callback);
        callbackSet = existingCallbackSet;
    }
    return ()=>{
        callbackSet.callbacks.delete(callback);
        if (callbackSet.callbacks.size === 0) {
            callbackSet.unsubscribe();
            updateCallbackSets.delete(key);
        }
    };
}
function triggerUpdate(msg) {
    const key = resourceKey(msg.resource);
    const callbackSet = updateCallbackSets.get(key);
    if (!callbackSet) {
        return;
    }
    for (const callback of callbackSet.callbacks){
        callback(msg);
    }
    if (msg.type === "notFound") {
        // This indicates that the resource which we subscribed to either does not exist or
        // has been deleted. In either case, we should clear all update callbacks, so if a
        // new subscription is created for the same resource, it will send a new "subscribe"
        // message to the server.
        // No need to send an "unsubscribe" message to the server, it will have already
        // dropped the update stream before sending the "notFound" message.
        updateCallbackSets.delete(key);
    }
}
}}),
"[project]/src/utils/storage.js [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "clearAllCookies": (()=>clearAllCookies),
    "getCartId": (()=>getCartId),
    "getRefreshToken": (()=>getRefreshToken),
    "getRole": (()=>getRole),
    "getSessionId": (()=>getSessionId),
    "getToken": (()=>getToken),
    "getUserId": (()=>getUserId),
    "removeCartId": (()=>removeCartId),
    "removeRefreshToken": (()=>removeRefreshToken),
    "removeRole": (()=>removeRole),
    "removeSessionId": (()=>removeSessionId),
    "removeToken": (()=>removeToken),
    "removeUserId": (()=>removeUserId),
    "setCartId": (()=>setCartId),
    "setRefreshToken": (()=>setRefreshToken),
    "setRole": (()=>setRole),
    "setSessionId": (()=>setSessionId),
    "setToken": (()=>setToken),
    "setUserId": (()=>setUserId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/js-cookie/dist/js.cookie.mjs [client] (ecmascript)");
;
const TOKEN_KEY = 'token';
const REFRESH_TOKEN_KEY = 'refreshToken';
const USER_ID_KEY = 'userId';
const SESSION_ID_KEY = 'sessionId';
const CART_ID_KEY = 'cartId';
const ROLE = 'role';
const setToken = (token)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].set(TOKEN_KEY, token, {
        expires: 7,
        secure: true,
        sameSite: 'Strict'
    });
const getToken = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].get(TOKEN_KEY);
const removeToken = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].remove(TOKEN_KEY);
const setRefreshToken = (token)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].set(REFRESH_TOKEN_KEY, token, {
        expires: 7,
        secure: true,
        sameSite: 'Strict'
    });
const getRefreshToken = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].get(REFRESH_TOKEN_KEY);
const removeRefreshToken = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].remove(REFRESH_TOKEN_KEY);
const setUserId = (userId)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].set(USER_ID_KEY, userId, {
        expires: 7,
        secure: true,
        sameSite: 'Strict'
    });
const getUserId = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].get(USER_ID_KEY);
const removeUserId = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].remove(USER_ID_KEY);
const setSessionId = (sessionId)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].set(SESSION_ID_KEY, sessionId, {
        expires: 7,
        secure: false,
        sameSite: 'Strict'
    });
const getSessionId = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].get(SESSION_ID_KEY);
const removeSessionId = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].remove(SESSION_ID_KEY);
const setCartId = (cartId)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].set(CART_ID_KEY, cartId, {
        expires: 7,
        secure: false,
        sameSite: 'Strict'
    });
const getCartId = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].get(CART_ID_KEY);
const removeCartId = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].remove(CART_ID_KEY);
const setRole = (role)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].set(ROLE, role, {
        expires: 7,
        secure: false,
        sameSite: 'Strict'
    });
const getRole = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].get(ROLE);
const removeRole = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].remove(ROLE);
const clearAllCookies = ()=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].remove(TOKEN_KEY);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].remove(REFRESH_TOKEN_KEY);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].remove(USER_ID_KEY);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].remove(SESSION_ID_KEY);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].remove(CART_ID_KEY);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].remove(ROLE);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/store/slices/userSlice.js [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__),
    "getUserInfo": (()=>getUserInfo),
    "loginUser": (()=>loginUser),
    "logoutUser": (()=>logoutUser),
    "registerUser": (()=>registerUser),
    "resetAuthState": (()=>resetAuthState),
    "updateProfile": (()=>updateProfile),
    "verifyOtp": (()=>verifyOtp)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/apiClient.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [client] (ecmascript) <locals>");
;
;
const registerUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('auth/registerUser', async (userData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["userApi"].register(userData);
        return response;
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
});
const verifyOtp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('auth/verifyOtp', async (otpData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["userApi"].verifyOtp(otpData);
        return response;
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
});
const loginUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('auth/loginUser', async (credentials, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["userApi"].login(credentials);
        return response;
    } catch (error) {
        // Chuẩn hóa thông báo lỗi
        return rejectWithValue({
            status: 'error',
            code: error.response?.data?.code || 400,
            message: error.response?.data?.message === "User not found" || error.response?.data?.message === "Invalid password" ? "Tài khoản hoặc mật khẩu không đúng" : error.response?.data?.message || "Đã có lỗi xảy ra",
            data: null
        });
    }
});
const logoutUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('auth/logoutUser', async (_, { rejectWithValue })=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["userApi"].logout();
        return true;
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
});
const getUserInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('auth/getUserInfo', async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["userApi"].getUserProfile();
        return response; // Trả về dữ liệu người dùng
    } catch (error) {
        // Xử lý lỗi từ apiClient
        console.error('Error fetching user info:', error);
        return rejectWithValue(error.message || 'Failed to fetch user info');
    }
});
const updateProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('auth/updateProfile', async (userData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["userApi"].updateUserProfile(userData);
        // Đảm bảo trả về đúng dữ liệu user đã cập nhật
        return response.data;
    } catch (error) {
        return rejectWithValue({
            message: error.response?.data?.message || 'Không thể cập nhật thông tin.'
        });
    }
});
// Slice
const userSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'auth',
    initialState: {
        user: null,
        token: null,
        loading: false,
        error: null
    },
    reducers: {
        resetAuthState: (state)=>{
            state.user = null;
            state.token = null;
            state.loading = false;
            state.error = null;
        }
    },
    extraReducers: (builder)=>{
        // Register
        builder.addCase(registerUser.pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(registerUser.fulfilled, (state, action)=>{
            state.loading = false;
            state.user = action.payload.user;
        });
        builder.addCase(registerUser.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
        // Verify OTP
        builder.addCase(verifyOtp.pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(verifyOtp.fulfilled, (state, action)=>{
            state.loading = false;
            state.user = action.payload.user;
        });
        builder.addCase(verifyOtp.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
        // Login
        builder.addCase(loginUser.pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(loginUser.fulfilled, (state, action)=>{
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.accessToken;
        });
        builder.addCase(loginUser.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
        // Logout
        builder.addCase(logoutUser.pending, (state)=>{
            state.loading = true;
        });
        builder.addCase(logoutUser.fulfilled, (state)=>{
            state.user = null;
            state.token = null;
            state.loading = false;
        });
        builder.addCase(logoutUser.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
        // Get User Info
        builder.addCase(getUserInfo.pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getUserInfo.fulfilled, (state, action)=>{
            state.loading = false;
            state.user = action.payload;
        });
        builder.addCase(getUserInfo.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload || 'Failed to fetch user info';
        });
        // Update Profile
        builder.addCase(updateProfile.pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        // Sửa lại reducer updateProfile.fulfilled
        builder.addCase(updateProfile.fulfilled, (state, action)=>{
            state.loading = false;
            // Cập nhật state với dữ liệu mới
            state.user = {
                ...state.user,
                ...action.payload
            };
            state.error = null;
        });
        builder.addCase(updateProfile.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
});
const { resetAuthState } = userSlice.actions;
const __TURBOPACK__default__export__ = userSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/apiClient.js [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "addressApi": (()=>addressApi),
    "adminApi": (()=>adminApi),
    "apiClient": (()=>apiClient),
    "carrierApi": (()=>carrierApi),
    "cartApi": (()=>cartApi),
    "colorsApi": (()=>colorsApi),
    "couponApi": (()=>couponApi),
    "favoriteApi": (()=>favoriteApi),
    "indexApi": (()=>indexApi),
    "orderApi": (()=>orderApi),
    "orderTrackingApi": (()=>orderTrackingApi),
    "paymentApi": (()=>paymentApi),
    "productApi": (()=>productApi),
    "productsByCategoryApi": (()=>productsByCategoryApi),
    "revenueApi": (()=>revenueApi),
    "reviewApi": (()=>reviewApi),
    "stockApi": (()=>stockApi),
    "userApi": (()=>userApi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/storage.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$userSlice$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/slices/userSlice.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/lib/axios.js [client] (ecmascript)");
;
;
;
// https://kltn-1a.onrender.com hihi, http://localhost:5551/v1/api/, https://c918-118-71-16-139.ngrok-free.app
const apiClient = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: 'http://localhost:5551/v1/api/',
    headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true'
    },
    withCredentials: true
});
// **Request Interceptor**
apiClient.interceptors.request.use(async (config)=>{
    try {
        // Retrieve access token and session ID from cookies
        const accessToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getToken"])();
        const sessionId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getSessionId"])();
        // Add Authorization header if token exists
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        // Add session ID header if session ID exists
        if (sessionId) {
            config.headers['x-session-id'] = sessionId; // Add session ID to headers
        }
    } catch (error) {
        console.error('Error adding headers:', error);
    }
    return config;
}, (error)=>Promise.reject(error));
const MAX_RETRY_COUNT = 5; // Giới hạn số lần retry
// Hàm delay với backoff logic
const delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));
// Interceptor xử lý response
apiClient.interceptors.response.use((response)=>{
    console.log('Response received:', response);
    // Lưu session ID nếu có trong response headers
    const sessionId = response.headers?.['x-session-id'];
    if (sessionId) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$client$5d$__$28$ecmascript$29$__["setSessionId"])(sessionId); // Lưu vào cookie hoặc storage
        console.log('Session ID saved from response:', sessionId);
    }
    return response;
}, async (error)=>{
    const originalRequest = error.config;
    console.log('Error response:', error.response || 'No response available');
    // Thêm thuộc tính _retryCount nếu chưa có
    if (!originalRequest._retryCount) {
        originalRequest._retryCount = 0;
    }
    // Kiểm tra lỗi từ Refresh Token
    if (error.response?.status === 403 && error.response?.data?.message === "Refresh Token không tồn tại") {
        console.log('Refresh token does not exist. Logging out...');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$client$5d$__$28$ecmascript$29$__["clearAllCookies"])(); // Xóa tất cả cookies
        store.dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$userSlice$2e$js__$5b$client$5d$__$28$ecmascript$29$__["resetAuthState"])()); // Reset trạng thái auth
        return new Promise(()=>{}); // Trả về Promise không lỗi
    }
    // Dừng retry nếu là request tới /users/refresh-token
    if (originalRequest.url.includes('/users/refresh-token')) {
        console.log('Refresh token request failed. Stopping retries.');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$client$5d$__$28$ecmascript$29$__["removeSessionId"])(); // Xóa session ID
        store.dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$userSlice$2e$js__$5b$client$5d$__$28$ecmascript$29$__["resetAuthState"])()); // Reset trạng thái auth
        return new Promise(()=>{}); // Trả về Promise không lỗi
    }
    // Nếu lỗi 403 và chưa đạt giới hạn retry
    if (error.response?.status === 403 && originalRequest._retryCount < MAX_RETRY_COUNT) {
        originalRequest._retryCount += 1; // Tăng số lần retry
        console.log(`Retrying request (${originalRequest._retryCount}/${MAX_RETRY_COUNT})...`);
        try {
            // Lấy token mới
            const newAccessToken = await userApi.refreshToken();
            // Gắn token mới vào header
            originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
            return apiClient(originalRequest); // Retry request
        } catch (refreshError) {
            console.log('Error during token refresh:', refreshError);
            return new Promise(()=>{}); // Trả về Promise không lỗi
        }
    }
    // Nếu vượt quá số lần retry
    if (originalRequest._retryCount >= MAX_RETRY_COUNT) {
        console.log('Maximum retry attempts reached.');
        return new Promise(()=>{}); // Trả về Promise không lỗi
    }
    return Promise.reject(error);
});
// **User API**
const userApi = {
    // Register user
    register: async (userData)=>{
        try {
            const response = await apiClient.post('users/register', userData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    // Verify OTP for registration
    verifyOtp: async (otpData)=>{
        try {
            const response = await apiClient.post('users/verify-otp', otpData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    // Login user
    login: async (credentials)=>{
        try {
            const response = await apiClient.post('users/login', credentials);
            const { accessToken, refreshToken, user } = response.data.data;
            if (accessToken && refreshToken) {
                // Lấy cart_id trực tiếp từ user object
                const cart_id = user.cart_id;
                // Lưu các thông tin cần thiết
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$client$5d$__$28$ecmascript$29$__["setRole"])('');
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$client$5d$__$28$ecmascript$29$__["setToken"])(accessToken);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$client$5d$__$28$ecmascript$29$__["setRefreshToken"])(refreshToken);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$client$5d$__$28$ecmascript$29$__["removeCartId"])(); // Xóa cart ID cũ nếu có
            // setCartId(cart_id); // Lưu cart ID mới
            }
            // Kiểm tra và lưu session ID từ headers
            const sessionId = response.headers['x-session-id'];
            if (sessionId) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$client$5d$__$28$ecmascript$29$__["setSessionId"])(sessionId);
                console.log('Session ID received and saved during login:', sessionId);
            }
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    // Logout user
    logout: async ()=>{
        try {
            const refreshToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getRefreshToken"])();
            const userId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getUserId"])();
            await apiClient.post('users/logout', {
                refreshToken,
                userId
            });
            // Clear all stored tokens and session ID
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$client$5d$__$28$ecmascript$29$__["removeSessionId"])();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$client$5d$__$28$ecmascript$29$__["removeRefreshToken"])();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$client$5d$__$28$ecmascript$29$__["removeUserId"])();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$client$5d$__$28$ecmascript$29$__["removeSessionId"])();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$client$5d$__$28$ecmascript$29$__["removeToken"])();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$client$5d$__$28$ecmascript$29$__["removeCartId"])();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$client$5d$__$28$ecmascript$29$__["removeRole"])();
            return {
                message: 'Logout successful'
            };
        } catch (error) {
            throw error.response?.data || 'Logout failed';
        }
    },
    // Get user profile
    getUserProfile: async ()=>{
        try {
            const response = await apiClient.get('users/profile');
            return response.data.data;
        } catch (error) {
            throw error.response?.data || 'Failed to fetch user profile';
        }
    },
    // Refresh token
    refreshToken: async ()=>{
        try {
            const get_refreshToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getRefreshToken"])();
            const get_userId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getUserId"])();
            const response = await apiClient.post('users/refresh-token', {
                get_refreshToken
            });
            const { accessToken, refreshToken: newRefreshToken } = response.data.data;
            if (accessToken && newRefreshToken) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$client$5d$__$28$ecmascript$29$__["setToken"])(accessToken); // Update access token
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$client$5d$__$28$ecmascript$29$__["setRefreshToken"])(newRefreshToken); // Update refresh token
            }
            return accessToken; // Return the new access token
        } catch (error) {
            throw new Error('Token refresh failed. Please log in again.');
        }
    },
    // Cập nhật thông tin profile người dùng
    updateUserProfile: async (userData)=>{
        try {
            const response = await apiClient.put('users/profile', userData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể cập nhật thông tin người dùng.';
        }
    },
    /**
 * Request password reset OTP
 * @param {Object} data - Request data
 * @param {string} data.email - User's email address
 * @returns {Promise<Object>} - API response
 */ forgotPassword: async (data)=>{
        try {
            const response = await apiClient.post('users/forgot-password', data);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể gửi yêu cầu đặt lại mật khẩu.';
        }
    },
    /**
     * Reset password using OTP
     * @param {Object} data - Reset password data
     * @param {string} data.email - User's email
     * @param {string} data.otp - One-time password
     * @param {string} data.newPassword - New password
     * @returns {Promise<Object>} - API response
     */ resetPassword: async (data)=>{
        try {
            const response = await apiClient.post('users/reset-password', data);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể đặt lại mật khẩu.';
        }
    }
};
const adminApi = {
    /**
     * Đăng nhập admin
     * @param {Object} credentials - Dữ liệu đăng nhập (email và password)
     * @returns {Promise<Object>} - Phản hồi từ API
     */ loginForAdmin: async (credentials)=>{
        try {
            const response = await apiClient.post('users/login-admin', credentials);
            // Lấy token và vai trò từ phản hồi
            const { accessToken, refreshToken, role } = response.data.data;
            // Lưu token và role
            if (accessToken && refreshToken) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$client$5d$__$28$ecmascript$29$__["setToken"])(accessToken);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$client$5d$__$28$ecmascript$29$__["setRefreshToken"])(refreshToken);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$client$5d$__$28$ecmascript$29$__["setRole"])(role);
            }
            // Lưu session ID nếu có trong header
            const sessionId = response.headers['x-session-id'];
            if (sessionId) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$client$5d$__$28$ecmascript$29$__["setSessionId"])(sessionId);
            }
            return {
                user: response.data.user,
                role
            }; // Trả về thông tin người dùng và vai trò
        } catch (error) {
            throw error.response?.data || error.message;
        }
    },
    // Get all users (Admin only) 
    getAllUsers: async (params = {})=>{
        try {
            const { page = 1, limit = 10, email, phone, name } = params;
            const query = new URLSearchParams({
                page: String(page),
                limit: String(limit)
            });
            if (email) query.append('email', email);
            if (phone) query.append('phone', phone);
            if (name) query.append('name', name);
            const response = await apiClient.get(`users/admin/users?${query}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to fetch users list';
        }
    },
    // Create new user (Admin only)
    createUser: async (userData)=>{
        try {
            const response = await apiClient.post('users/admin/users', userData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to create user';
        }
    },
    // Update user (Admin only) 
    updateUser: async (userId, userData)=>{
        try {
            const response = await apiClient.put(`users/admin/users/${userId}`, userData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to update user';
        }
    },
    deleteUser: async (userId)=>{
        try {
            const response = await apiClient.delete(`users/admin/users/${userId}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to delete user';
        }
    }
};
// **Product API**
const productApi = {
    // Create a new product
    createProduct: async (productData)=>{
        const response = await apiClient.post('products/', productData);
        return response.data;
    },
    // Get all products
    getProducts: async ()=>{
        const response = await apiClient.get('products');
        return response.data.data;
    },
    // Get product details by slug
    getProductDetail: async (slug)=>{
        const response = await apiClient.get(`products/${slug}`);
        return response.data.data;
    },
    // Update product by slug
    updateProduct: async (slug, productData)=>{
        const response = await apiClient.put(`products/${slug}`, productData);
        return response.data;
    },
    // Delete product by slug
    deleteProduct: async (slug)=>{
        const response = await apiClient.delete(`products/${slug}`);
        return response.data;
    },
    // Get products with pagination
    getProductsByPagination: async (params = {})=>{
        try {
            const { page = 1, limit = 20, name, categories, colors, sizes, priceRange, sort = 'newest' } = params;
            // Xây dựng query parameters
            const queryParams = new URLSearchParams({
                page: String(page),
                limit: String(limit)
            });
            // Thêm các filter tùy chọn
            if (name) queryParams.append('name', name);
            if (categories) queryParams.append('categories', categories);
            if (colors) queryParams.append('colors', colors);
            if (sizes) queryParams.append('sizes', sizes);
            if (priceRange) queryParams.append('priceRange', priceRange);
            if (sort) queryParams.append('sort', sort);
            console.log('API call to:', `products/pagination?${queryParams.toString()}`);
            const response = await apiClient.get(`products/pagination?${queryParams.toString()}`);
            console.log('API response:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error.response?.data || 'Failed to fetch products.';
        }
    },
    // Get new products with pagination
    getNewProductsByPagination: async (page, limit, sort, priceRange, colorIds)=>{
        try {
            const query = new URLSearchParams({
                page,
                limit,
                sort,
                priceRange: priceRange || '',
                colorIds: colorIds || ''
            }).toString();
            const response = await apiClient.get(`products/new?${query}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching new products:', error);
            throw error.response?.data || 'Failed to fetch new products.';
        }
    },
    // Get featured products with pagination
    getFeaturedProductsByPagination: async (page, limit, sort, priceRange, colorIds)=>{
        try {
            const query = new URLSearchParams({
                page,
                limit,
                sort,
                priceRange: priceRange || '',
                colorIds: colorIds || ''
            }).toString();
            const response = await apiClient.get(`products/featured?${query}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching featured products:', error);
            throw error.response?.data || 'Failed to fetch featured products.';
        }
    },
    searchProductsByNameAndColor: async (keyword, options = {})=>{
        try {
            const { page = 1, limit = 20, sort = 'newest' } = options;
            const query = new URLSearchParams({
                keyword: keyword || '',
                page: String(page),
                limit: String(limit),
                sort
            }).toString();
            const response = await apiClient.get(`products/search/name-color?${query}`);
            return response.data;
        } catch (error) {
            console.error('Error searching products:', error);
            throw error.response?.data || 'Không thể tìm kiếm sản phẩm.';
        }
    }
};
const cartApi = {
    // Tạo giỏ hàng cho khách
    createCartForGuest: async (cartData)=>{
        try {
            const response = await apiClient.post('carts/guest', cartData);
            const { id } = response.data.data;
            if (id) {
                console.log('Cart ID:', id);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$client$5d$__$28$ecmascript$29$__["setCartId"])(id); // Lưu cart ID vào cookie hoặc storage
            }
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to create cart for guest.';
        }
    },
    // Tạo hoặc lấy giỏ hàng cho người dùng đã đăng nhập
    createCartForUser: async ()=>{
        try {
            const response = await apiClient.post('carts/user');
            const { id } = response.data.data;
            if (id) {
                console.log('Cart ID:', id);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$client$5d$__$28$ecmascript$29$__["setCartId"])(id); // Lưu cart ID vào cookie hoặc storage
            }
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to create or retrieve cart for user.';
        }
    },
    // Lấy chi tiết giỏ hàng theo ID
    getCartById: async (cartId)=>{
        try {
            const response = await apiClient.get(`carts/${cartId}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to fetch cart details.';
        }
    },
    // Thêm sản phẩm vào giỏ hàng
    addItemToCart: async (cartId, itemData)=>{
        try {
            const response = await apiClient.post(`carts/${cartId}/items`, itemData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to add item to cart.';
        }
    },
    // Xóa sản phẩm khỏi giỏ hàng
    removeCartItem: async (itemId)=>{
        try {
            const response = await apiClient.delete(`carts/items/${itemId}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to remove item from cart.';
        }
    },
    // Lấy tất cả sản phẩm trong giỏ hàng
    getCartItems: async (cartId)=>{
        try {
            const response = await apiClient.get(`carts/${cartId}/items`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to fetch cart items.';
        }
    },
    // Cập nhật số lượng sản phẩm trong giỏ hàng
    updateCartItemQuantity: async (itemId, quantity)=>{
        try {
            const response = await apiClient.put(`carts/item/${itemId}`, {
                quantity
            });
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to update cart item quantity.';
        }
    }
};
const reviewApi = {
    // Tạo mới một review
    createReview: async (reviewData)=>{
        try {
            const response = await apiClient.post('reviews/', reviewData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to create review.';
        }
    },
    // Lấy danh sách review của một sản phẩm
    getReviewsByProduct: async (productId, page, limit)=>{
        try {
            const response = await apiClient.get(`reviews/product/${productId}?page=${page}&limit=${limit}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to fetch reviews.';
        }
    },
    // Lấy điểm trung bình của một sản phẩm
    getAverageRating: async (productId)=>{
        try {
            const response = await apiClient.get(`reviews/product/${productId}/average-rating`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to fetch average rating.';
        }
    },
    // Xóa một review
    deleteReview: async (reviewId)=>{
        try {
            const response = await apiClient.delete(`reviews/${reviewId}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to delete review.';
        }
    }
};
const productsByCategoryApi = {
    // Fetch all products by category
    getProductsByCategory: async (categoryId, page, limit, sort, priceRange, colorIds)=>{
        try {
            const query = new URLSearchParams({
                page,
                limit,
                sort,
                priceRange: priceRange || '',
                colorIds: colorIds || ''
            }).toString();
            const response = await apiClient.get(`products-by-category/${categoryId}?${query}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to fetch products by category.';
        }
    }
};
const colorsApi = {
    // Fetch all colors
    getColors: async ()=>{
        try {
            const response = await apiClient.get('colors');
            return response.data.data;
        } catch (error) {
            throw error.response?.data || 'Failed to fetch colors.';
        }
    }
};
const indexApi = {
    getNewProducts: async (page, limit)=>{
        const response = await apiClient.get('/products/news', {
            params: {
                page,
                limit
            }
        });
        return response.data;
    },
    getFeaturedProducts: async (page, limit)=>{
        const response = await apiClient.get('/products/featureds', {
            params: {
                page,
                limit
            }
        });
        return response.data;
    }
};
const orderApi = {
    /**
     * Create a new order
     * @param {Object} orderData - Order details
     * @returns {Promise<Object>} - Created order response
     */ createOrder: async (orderData)=>{
        try {
            const response = await apiClient.post('orders', orderData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to create order.';
        }
    },
    /**
     * Get an order by ID
     * @param {number} orderId - ID of the order
     * @returns {Promise<Object>} - Order details
     */ getOrderById: async (orderId)=>{
        try {
            const response = await apiClient.get(`orders/${orderId}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to fetch order details.';
        }
    },
    /**
     * Update order status
     * @param {number} orderId - ID of the order
     * @param {string} status - New status ('pending', 'completed', 'canceled', etc.)
     * @returns {Promise<Object>} - Response status
     */ updateOrderStatus: async (orderId, status)=>{
        try {
            const response = await apiClient.patch(`orders/${orderId}/status`, {
                status
            });
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to update order status.';
        }
    },
    /**
     * Cancel expired orders
     * @returns {Promise<Object>} - Response status
     */ cancelExpiredOrders: async ()=>{
        try {
            const response = await apiClient.post('orders/cancel-expired');
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to cancel expired orders.';
        }
    },
    /**
     * Complete an order
     * @param {number} orderId - ID of the order
     * @returns {Promise<Object>} - Response status
     */ completeOrder: async (orderId)=>{
        try {
            const response = await apiClient.post(`orders/${orderId}/complete`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to complete order.';
        }
    },
    /**
     * Delete an order by ID
     * @param {number} orderId - ID of the order
     * @returns {Promise<Object>} - Response status
     */ deleteOrder: async (orderId)=>{
        try {
            const response = await apiClient.delete(`orders/${orderId}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to delete order.';
        }
    },
    /**
     * Get orders by user with pagination
     * @param {Object} params - Query parameters
     * @param {number} params.page - Page number
     * @param {number} params.limit - Items per page
     * @returns {Promise<Object>} - Paginated user orders
     */ getOrdersByUser: async ({ page = 1, limit = 10 })=>{
        try {
            const response = await apiClient.get(`orders/user`, {
                params: {
                    page,
                    limit
                }
            });
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể lấy danh sách đơn hàng.';
        }
    },
    getAllOrders: async ({ page = 1, limit = 10, status, startDate, endDate, orderId, customerName, customerEmail, customerPhone// Thêm filter số điện thoại
     })=>{
        try {
            // Tạo query params
            const params = new URLSearchParams({
                page: String(page),
                limit: String(limit)
            });
            // Thêm các filter hiện tại
            if (status) {
                params.append('status', status);
            }
            if (startDate) {
                params.append('startDate', startDate);
            }
            if (endDate) {
                params.append('endDate', endDate);
            }
            // Thêm các filter mới
            if (orderId) {
                params.append('orderId', orderId);
            }
            if (customerName) {
                params.append('customerName', customerName);
            }
            if (customerEmail) {
                params.append('customerEmail', customerEmail);
            }
            if (customerPhone) {
                params.append('customerPhone', customerPhone);
            }
            const response = await apiClient.get(`orders?${params}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể lấy danh sách đơn hàng.';
        }
    },
    /**
 * Gửi email xác nhận đơn hàng
 * @param {Object} data - Dữ liệu đơn hàng
 * @param {Array} data.checkoutItems - Danh sách sản phẩm đặt hàng
 * @param {Object} data.orderDetails - Chi tiết đơn hàng
 * @returns {Promise<Object>} - Kết quả gửi email
 */ sendOrderConfirmation: async (data)=>{
        try {
            const response = await apiClient.post('orders/send-order-confirmation', data);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể gửi email xác nhận đơn hàng.';
        }
    }
};
const paymentApi = {
    /**
     * Tạo thanh toán qua PayOS
     * @param {Object} paymentData - Dữ liệu thanh toán
     * @returns {Promise<Object>} - Thông tin thanh toán
     */ createPayOSPayment: async (paymentData)=>{
        try {
            const response = await apiClient.post('payments/payos', paymentData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể tạo thanh toán PayOS.';
        }
    },
    /**
     * Tạo thanh toán COD (Cash On Delivery)
     * @param {Object} codData - Dữ liệu thanh toán COD
     * @returns {Promise<Object>} - Thông tin thanh toán COD
     */ createCODPayment: async (codData)=>{
        try {
            const response = await apiClient.post('payments/cod', codData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể tạo thanh toán COD.';
        }
    },
    updatePaymentStatus: async (statusData)=>{
        try {
            const response = await apiClient.post('payments/payos-webhook', statusData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể cập nhật trạng thái thanh toán.';
        }
    },
    /**
     * Cập nhật trạng thái thanh toán
     * @param {Object} statusData - Dữ liệu cập nhật trạng thái
     * @param {string} statusData.orderId - ID đơn hàng
     * @param {string} statusData.paymentMethod - Phương thức thanh toán ('payos' hoặc 'cash_on_delivery')
     * @param {string} statusData.paymentStatus - Trạng thái thanh toán ('pending', 'processing', 'paid', 'cancelled')
     * @returns {Promise<Object>} - Kết quả cập nhật
     */ updatePaymentMethodStatus: async (statusData)=>{
        try {
            const response = await apiClient.put('payments/update-status', statusData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể cập nhật trạng thái thanh toán.';
        }
    }
};
const stockApi = {
    // Lấy thông tin tồn kho
    getProductStocks: async ()=>{
        try {
            const response = await apiClient.get('product-stocks');
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to fetch product stocks.';
        }
    },
    updateStock: async (stockId, stockData)=>{
        try {
            const response = await apiClient.put(`product-stocks/${stockId}`, stockData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to update stock.';
        }
    }
};
const carrierApi = {
    // Tạo nhà vận chuyển mới
    createCarrier: async (carrierData)=>{
        try {
            const response = await apiClient.post('carriers', carrierData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to create carrier.';
        }
    },
    // Lấy danh sách nhà vận chuyển
    getCarriers: async (query = {})=>{
        try {
            const { page = 1, limit = 10 } = query;
            const queryString = new URLSearchParams({
                page,
                limit
            }).toString();
            const response = await apiClient.get(`carriers?${queryString}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to fetch carriers.';
        }
    },
    // Lấy chi tiết nhà vận chuyển
    getCarrierById: async (id)=>{
        try {
            const response = await apiClient.get(`carriers/${id}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to fetch carrier details.';
        }
    },
    // Cập nhật thông tin nhà vận chuyển
    updateCarrier: async (id, carrierData)=>{
        try {
            const response = await apiClient.put(`carriers/${id}`, carrierData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to update carrier.';
        }
    },
    // Xóa nhà vận chuyển
    deleteCarrier: async (id)=>{
        try {
            const response = await apiClient.delete(`carriers/${id}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to delete carrier.';
        }
    },
    // Cập nhật trạng thái nhà vận chuyển
    updateCarrierStatus: async (id, status)=>{
        try {
            const response = await apiClient.patch(`carriers/${id}/status`, {
                status
            });
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to update carrier status.';
        }
    }
};
const addressApi = {
    // Lấy danh sách địa chỉ của người dùng
    getAddresses: async ()=>{
        try {
            const response = await apiClient.get('addresses');
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể lấy danh sách địa chỉ.';
        }
    },
    // Tạo địa chỉ mới
    createAddress: async (addressData)=>{
        try {
            const response = await apiClient.post('addresses', addressData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể tạo địa chỉ mới.';
        }
    },
    // Cập nhật địa chỉ
    updateAddress: async (addressId, addressData)=>{
        try {
            const response = await apiClient.put(`addresses/${addressId}`, addressData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể cập nhật địa chỉ.';
        }
    },
    // Xóa địa chỉ
    deleteAddress: async (addressId)=>{
        try {
            const response = await apiClient.delete(`addresses/${addressId}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể xóa địa chỉ.';
        }
    },
    // Đặt địa chỉ làm mặc định
    setDefaultAddress: async (addressId)=>{
        try {
            const response = await apiClient.put(`addresses/${addressId}/default`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể đặt địa chỉ mặc định.';
        }
    }
};
const favoriteApi = {
    // Kiểm tra trạng thái yêu thích của sản phẩm
    checkFavoriteStatus: async (productId)=>{
        try {
            const response = await apiClient.get(`favorites/products/${productId}/favorite`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể kiểm tra trạng thái yêu thích.';
        }
    },
    // Lấy danh sách sản phẩm yêu thích
    getFavorites: async (page = 1, limit = 10)=>{
        try {
            const response = await apiClient.get('favorites/favorites', {
                params: {
                    page,
                    limit
                }
            });
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể lấy danh sách yêu thích.';
        }
    },
    // Thêm sản phẩm vào danh sách yêu thích
    addToFavorite: async (productId)=>{
        try {
            const response = await apiClient.post(`favorites/products/${productId}/favorite`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể thêm vào yêu thích.';
        }
    },
    // Xóa sản phẩm khỏi danh sách yêu thích
    removeFromFavorite: async (productId)=>{
        try {
            const response = await apiClient.delete(`favorites/products/${productId}/favorite`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể xóa khỏi yêu thích.';
        }
    },
    // Chuyển danh sách yêu thích từ session sang tài khoản
    transferFavorites: async ()=>{
        try {
            const response = await apiClient.post('favorites/favorites/transfer');
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể chuyển danh sách yêu thích.';
        }
    }
};
const orderTrackingApi = {
    /**
     * Tra cứu thông tin đơn hàng
     * @param {string} orderId - Mã đơn hàng
     * @param {string} identifier - Email hoặc số điện thoại người đặt
     * @returns {Promise<Object>} - Thông tin đơn hàng
     */ trackOrder: async (orderId, identifier)=>{
        try {
            const response = await apiClient.get(`order-tracking/${orderId}`, {
                params: {
                    identifier
                }
            });
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể tra cứu thông tin đơn hàng.';
        }
    }
};
const couponApi = {
    // Tạo mã giảm giá mới (Admin)
    createCoupon: async (couponData)=>{
        try {
            const response = await apiClient.post('coupons', couponData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể tạo mã giảm giá.';
        }
    },
    // Lấy danh sách mã giảm giá (Admin)
    getAllCoupons: async (params = {})=>{
        try {
            const { page = 1, limit = 10, search, is_active, startDate, endDate, minAmount, maxAmount, sortBy = 'created_at', sortOrder = 'DESC' } = params;
            // Xây dựng query parameters
            const query = new URLSearchParams({
                page: String(page),
                limit: String(limit)
            });
            // Thêm các filter tùy chọn
            if (search) {
                query.append('search', search);
            }
            if (typeof is_active !== 'undefined') {
                query.append('is_active', is_active);
            }
            if (startDate) {
                query.append('startDate', startDate);
            }
            if (endDate) {
                query.append('endDate', endDate);
            }
            if (minAmount) {
                query.append('minAmount', minAmount);
            }
            if (maxAmount) {
                query.append('maxAmount', maxAmount);
            }
            if (sortBy) {
                query.append('sortBy', sortBy);
            }
            if (sortOrder) {
                query.append('sortOrder', sortOrder);
            }
            const response = await apiClient.get(`coupons?${query}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể lấy danh sách mã giảm giá.';
        }
    },
    // Lấy chi tiết mã giảm giá (Admin)
    getCouponById: async (id)=>{
        try {
            const response = await apiClient.get(`coupons/${id}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể lấy thông tin mã giảm giá.';
        }
    },
    // Kiểm tra mã giảm giá (Public)
    validateCoupon: async (code, orderAmount)=>{
        try {
            const response = await apiClient.post('coupons/validate', {
                code,
                orderAmount
            });
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Mã giảm giá không hợp lệ.';
        }
    },
    // Áp dụng mã giảm giá (Public)
    applyCoupon: async (code, orderAmount)=>{
        try {
            const response = await apiClient.post('coupons/apply', {
                code,
                orderAmount
            });
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể áp dụng mã giảm giá.';
        }
    },
    // Cập nhật mã giảm giá (Admin)
    updateCoupon: async (id, updateData)=>{
        try {
            const response = await apiClient.put(`coupons/${id}`, updateData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể cập nhật mã giảm giá.';
        }
    },
    // Xóa mã giảm giá (Admin)
    deleteCoupon: async (id)=>{
        try {
            const response = await apiClient.delete(`coupons/${id}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể xóa mã giảm giá.';
        }
    }
};
const revenueApi = {
    // Lấy thống kê doanh thu
    getRevenueStats: async (filters = {})=>{
        try {
            const queryParams = new URLSearchParams();
            if (filters.startDate) {
                queryParams.append('startDate', filters.startDate);
            }
            if (filters.endDate) {
                queryParams.append('endDate', filters.endDate);
            }
            const response = await apiClient.get(`revenue/stats?${queryParams}`);
            return response;
        } catch (error) {
            throw error.response?.data || 'Không thể lấy thống kê doanh thu.';
        }
    },
    // Lấy doanh thu theo ngày
    getDailyRevenue: async (date)=>{
        try {
            const response = await apiClient.get('revenue/daily', {
                params: {
                    date
                }
            });
            return response;
        } catch (error) {
            throw error.response?.data || 'Không thể lấy doanh thu theo ngày.';
        }
    },
    // Lấy doanh thu theo tháng
    getMonthlyRevenue: async (year, month)=>{
        try {
            const response = await apiClient.get('revenue/monthly', {
                params: {
                    year,
                    month
                }
            });
            return response;
        } catch (error) {
            throw error.response?.data || 'Không thể lấy doanh thu theo tháng.';
        }
    }
};
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/pages/payment/success.js [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// pages/payment/success.js
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/router.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/apiClient.js [client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
const PaymentSuccess = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { code, orderCode, status, method } = router.query;
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('Đang xử lý thanh toán...');
    const [isSuccess, setIsSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PaymentSuccess.useEffect": ()=>{
            if (!router.isReady) return;
            const updatePaymentStatus = {
                "PaymentSuccess.useEffect.updatePaymentStatus": async ()=>{
                    try {
                        // Lấy thông tin đơn hàng từ localStorage
                        const orderDetails = JSON.parse(localStorage.getItem('orderDetails'));
                        const checkoutItems = JSON.parse(localStorage.getItem('checkoutItems'));
                        // Kiểm tra null
                        if (!orderDetails || !checkoutItems) {
                            console.error('Không tìm thấy thông tin đơn hàng');
                            setIsSuccess(false);
                            setMessage('Có lỗi xảy ra');
                            setErrorMessage('Không tìm thấy thông tin đơn hàng');
                            setTimeout({
                                "PaymentSuccess.useEffect.updatePaymentStatus": ()=>router.push('/checkout')
                            }["PaymentSuccess.useEffect.updatePaymentStatus"], 3000);
                            return;
                        }
                        // Format lại checkoutItems theo cấu trúc yêu cầu
                        const formattedCheckoutItems = checkoutItems.map({
                            "PaymentSuccess.useEffect.updatePaymentStatus.formattedCheckoutItems": (item)=>({
                                    product: {
                                        product_name: item.product.product_name,
                                        price: item.product.discount_price
                                    },
                                    quantity: item.quantity,
                                    size: {
                                        name: item.size.name
                                    },
                                    color: {
                                        name: item.color.name,
                                        image_url: item.color.image_url
                                    }
                                })
                        }["PaymentSuccess.useEffect.updatePaymentStatus.formattedCheckoutItems"]);
                        const emailData = {
                            checkoutItems: formattedCheckoutItems,
                            orderDetails: {
                                data: {
                                    order_id: orderDetails.data.order_id,
                                    email: orderDetails.data.email,
                                    original_price: orderDetails.data.original_price,
                                    amount: orderDetails.data.amount,
                                    shipping_fee: orderDetails.data.shipping_fee,
                                    discount_amount: orderDetails.data.discount_amount || 0,
                                    expires_at: orderDetails.data.expires_at,
                                    formData: orderDetails.data.formData
                                }
                            }
                        };
                        if (method === 'cod') {
                            if (code === '00' && status === 'PAID') {
                                try {
                                    // Gửi email trước
                                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["orderApi"].sendOrderConfirmation(emailData);
                                    setIsSuccess(true);
                                    setMessage('Đặt hàng thành công!');
                                    // Xóa localStorage sau khi gửi email thành công
                                    localStorage.removeItem('orderDetails');
                                    localStorage.removeItem('checkoutItems');
                                    setTimeout({
                                        "PaymentSuccess.useEffect.updatePaymentStatus": ()=>router.push('/')
                                    }["PaymentSuccess.useEffect.updatePaymentStatus"], 3000);
                                } catch (emailError) {
                                    console.error('Lỗi gửi email xác nhận:', emailError);
                                    setIsSuccess(true); // Vẫn xem như thành công vì đơn hàng đã được tạo
                                    setMessage('Đặt hàng thành công!');
                                    setErrorMessage('Không gửi được email xác nhận, nhưng đơn hàng đã được ghi nhận');
                                    setTimeout({
                                        "PaymentSuccess.useEffect.updatePaymentStatus": ()=>router.push('/')
                                    }["PaymentSuccess.useEffect.updatePaymentStatus"], 3000);
                                }
                            } else {
                                setIsSuccess(false);
                                setMessage('Đặt hàng thất bại!');
                                setErrorMessage('Vui lòng thử lại hoặc liên hệ hỗ trợ');
                                setTimeout({
                                    "PaymentSuccess.useEffect.updatePaymentStatus": ()=>router.push('/checkout')
                                }["PaymentSuccess.useEffect.updatePaymentStatus"], 3000);
                            }
                        } else {
                            try {
                                // Xử lý thanh toán VietQR
                                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["paymentApi"].updatePaymentStatus({
                                    orderCode: Number(orderCode),
                                    status: status === 'CANCELLED' ? 'cancelled' : 'paid',
                                    transactionId: Date.now().toString()
                                });
                                if (code === '00' && status === 'PAID') {
                                    try {
                                        // Gửi email trước
                                        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["orderApi"].sendOrderConfirmation(emailData);
                                        setIsSuccess(true);
                                        setMessage('Thanh toán thành công!');
                                        // Xóa localStorage sau khi gửi email thành công
                                        localStorage.removeItem('orderDetails');
                                        localStorage.removeItem('checkoutItems');
                                        setTimeout({
                                            "PaymentSuccess.useEffect.updatePaymentStatus": ()=>router.push('/')
                                        }["PaymentSuccess.useEffect.updatePaymentStatus"], 3000);
                                    } catch (emailError) {
                                        console.error('Lỗi gửi email xác nhận:', emailError);
                                        setIsSuccess(true);
                                        setMessage('Thanh toán thành công!');
                                        setErrorMessage('Không gửi được email xác nhận, nhưng thanh toán đã được ghi nhận');
                                        localStorage.removeItem('orderDetails');
                                        localStorage.removeItem('checkoutItems');
                                        setTimeout({
                                            "PaymentSuccess.useEffect.updatePaymentStatus": ()=>router.push('/')
                                        }["PaymentSuccess.useEffect.updatePaymentStatus"], 3000);
                                    }
                                } else {
                                    setIsSuccess(false);
                                    setMessage('Thanh toán thất bại!');
                                    setErrorMessage('Vui lòng thử lại hoặc chọn phương thức thanh toán khác');
                                    setTimeout({
                                        "PaymentSuccess.useEffect.updatePaymentStatus": ()=>router.push('/checkout')
                                    }["PaymentSuccess.useEffect.updatePaymentStatus"], 3000);
                                }
                            } catch (error) {
                                console.error('Lỗi cập nhật trạng thái:', error);
                                setIsSuccess(false);
                                setMessage('Có lỗi xảy ra');
                                setErrorMessage('Không thể cập nhật trạng thái thanh toán. Vui lòng liên hệ hỗ trợ');
                                setTimeout({
                                    "PaymentSuccess.useEffect.updatePaymentStatus": ()=>router.push('/checkout')
                                }["PaymentSuccess.useEffect.updatePaymentStatus"], 3000);
                            }
                        }
                    } catch (error) {
                        console.error('Lỗi xử lý:', error);
                        setIsSuccess(false);
                        setMessage('Có lỗi xảy ra');
                        setErrorMessage(error.message || 'Vui lòng thử lại sau');
                        setTimeout({
                            "PaymentSuccess.useEffect.updatePaymentStatus": ()=>router.push('/checkout')
                        }["PaymentSuccess.useEffect.updatePaymentStatus"], 3000);
                    }
                }
            }["PaymentSuccess.useEffect.updatePaymentStatus"];
            updatePaymentStatus();
        }
    }["PaymentSuccess.useEffect"], [
        router.isReady,
        code,
        orderCode,
        status,
        method,
        router
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-100 flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-md w-full bg-white rounded-lg shadow-md p-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: isSuccess ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "mx-auto h-12 w-12 text-green-500",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M5 13l4 4L19 7"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/payment/success.js",
                                    lineNumber: 164,
                                    columnNumber: 37
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/pages/payment/success.js",
                                lineNumber: 158,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/pages/payment/success.js",
                            lineNumber: 157,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-gray-900 mb-2",
                            children: message
                        }, void 0, false, {
                            fileName: "[project]/src/pages/payment/success.js",
                            lineNumber: 172,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: "Cảm ơn bạn đã đặt hàng. Đơn hàng của bạn đang được xử lý."
                        }, void 0, false, {
                            fileName: "[project]/src/pages/payment/success.js",
                            lineNumber: 175,
                            columnNumber: 29
                        }, this),
                        errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-yellow-600 mt-2",
                            children: errorMessage
                        }, void 0, false, {
                            fileName: "[project]/src/pages/payment/success.js",
                            lineNumber: 179,
                            columnNumber: 33
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-500 mt-4",
                            children: "Tự động chuyển hướng sau 3 giây..."
                        }, void 0, false, {
                            fileName: "[project]/src/pages/payment/success.js",
                            lineNumber: 181,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "mx-auto h-12 w-12 text-red-500",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M6 18L18 6M6 6l12 12"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/payment/success.js",
                                    lineNumber: 194,
                                    columnNumber: 37
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/pages/payment/success.js",
                                lineNumber: 188,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/pages/payment/success.js",
                            lineNumber: 187,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-gray-900 mb-2",
                            children: message
                        }, void 0, false, {
                            fileName: "[project]/src/pages/payment/success.js",
                            lineNumber: 202,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: errorMessage || 'Đang trong quá trình xử lý. Vui lòng chờ.'
                        }, void 0, false, {
                            fileName: "[project]/src/pages/payment/success.js",
                            lineNumber: 205,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-500 mt-4",
                            children: "Đang chuyển về trang thanh toán..."
                        }, void 0, false, {
                            fileName: "[project]/src/pages/payment/success.js",
                            lineNumber: 208,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/pages/payment/success.js",
                lineNumber: 154,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/pages/payment/success.js",
            lineNumber: 153,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/pages/payment/success.js",
        lineNumber: 152,
        columnNumber: 9
    }, this);
};
_s(PaymentSuccess, "6wvX4OvYgwEFJlwIwnrLOjCkvFk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = PaymentSuccess;
const __TURBOPACK__default__export__ = PaymentSuccess;
var _c;
__turbopack_refresh__.register(_c, "PaymentSuccess");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/src/pages/payment/success.js [client] (ecmascript)\" } [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const PAGE_PATH = "/payment/success";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_require__("[project]/src/pages/payment/success.js [client] (ecmascript)");
    }
]);
// @ts-expect-error module.hot exists
if (module.hot) {
    // @ts-expect-error module.hot exists
    module.hot.dispose(function() {
        window.__NEXT_P.push([
            PAGE_PATH
        ]);
    });
}
}}),
"[project]/src/pages/payment/success.js (hmr-entry)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_require__("[next]/entry/page-loader.ts { PAGE => \"[project]/src/pages/payment/success.js [client] (ecmascript)\" } [client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__cb7eec._.js.map