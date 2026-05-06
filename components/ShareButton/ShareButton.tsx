import { useState, useEffect, useRef } from 'react';
import { Node, Edge } from 'reactflow';
import { encodeToBlueprintString, decodeFromBlueprintString } from '../../utils/blueprint';

export interface ShareButtonProps {
  nodes: Node[];
  edges: Edge[];
  onImport: (nodes: Node[], edges: Edge[]) => void;
}

export const ShareButton: React.FC<ShareButtonProps> = ({ nodes, edges, onImport }) => {
  const [notification, setNotification] = useState<string | null>(null);
  const [showImport, setShowImport] = useState(false);
  const [importValue, setImportValue] = useState('');
  const [importError, setImportError] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const showToast = (msg: string) => setNotification(msg);

  useEffect(() => {
    if (notification) {
      const t = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(t);
    }
  }, [notification]);

  useEffect(() => {
    if (showImport) textareaRef.current?.focus();
  }, [showImport]);

  const handleExport = async () => {
    const code = encodeToBlueprintString(nodes, edges);
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = code;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    showToast('Blueprint code copied!');
  };

  const handleImport = () => {
    setImportError(null);
    const result = decodeFromBlueprintString(importValue.trim());
    if (!result) {
      setImportError('Invalid blueprint code. Make sure you copied the full code.');
      return;
    }
    onImport(result.nodes, result.edges);
    setShowImport(false);
    setImportValue('');
    showToast('Blueprint loaded!');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setShowImport(false);
      setImportValue('');
      setImportError(null);
    }
  };

  return (
    <>
      <div className="absolute top-4 right-[4rem] z-50 flex gap-2">
        {/* Export / copy blueprint */}
        <button
          onClick={handleExport}
          className="bg-white rounded-lg shadow-lg p-2 hover:bg-gray-50 transition-colors border-2 border-gray-200 hover:border-gray-300 flex items-center justify-center h-10 w-10"
          title="Copy blueprint code"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
          </svg>
        </button>

        {/* Import blueprint */}
        <button
          onClick={() => { setShowImport(true); setImportError(null); setImportValue(''); }}
          className="bg-white rounded-lg shadow-lg p-2 hover:bg-gray-50 transition-colors border-2 border-gray-200 hover:border-gray-300 flex items-center justify-center h-10 w-10"
          title="Import blueprint code"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
        </button>
      </div>

      {/* Import modal */}
      {showImport && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]"
          onClick={(e) => { if (e.target === e.currentTarget) { setShowImport(false); setImportValue(''); setImportError(null); } }}
          onKeyDown={handleKeyDown}
        >
          <div className="bg-white rounded-xl p-6 w-[480px] shadow-2xl">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">Import Blueprint</h2>
            <p className="text-sm text-gray-500 mb-4">Paste a blueprint code below to load a saved build.</p>
            <textarea
              ref={textareaRef}
              value={importValue}
              onChange={e => { setImportValue(e.target.value); setImportError(null); }}
              rows={6}
              placeholder="COI1:..."
              className="w-full border-2 border-gray-200 rounded-lg p-3 text-sm font-mono resize-none focus:outline-none focus:border-blue-400 transition-colors"
            />
            {importError && (
              <p className="text-red-500 text-sm mt-2">{importError}</p>
            )}
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => { setShowImport(false); setImportValue(''); setImportError(null); }}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleImport}
                disabled={!importValue.trim()}
                className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Load Build
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast notification */}
      {notification && (
        <div className="fixed inset-0 flex items-center justify-center z-[100] pointer-events-none">
          <div
            className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-6 py-4 rounded-lg shadow-2xl"
            style={{ animation: 'fadeInOut 3s ease-out forwards' }}
          >
            <span className="font-medium text-base">{notification}</span>
          </div>
        </div>
      )}
    </>
  );
};
