'use client';

import React, { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';

interface FileUploadProps {
  label: string;
  onFilesSelected: (files: File[]) => void;
  maxFiles?: number;
  maxSizeMB?: number;
  className?: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  label,
  onFilesSelected,
  maxFiles = 10,
  maxSizeMB = 25,
  className,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      processFiles(Array.from(e.target.files));
    }
  };

  const processFiles = (newFiles: File[]) => {
    setError(null);
    const combinedFiles = [...selectedFiles, ...newFiles];
    
    if (combinedFiles.length > maxFiles) {
      setError(`Massimo ${maxFiles} file consentiti.`);
      return;
    }

    const totalSize = combinedFiles.reduce((acc, file) => acc + file.size, 0);
    if (totalSize > maxSizeMB * 1024 * 1024) {
      setError(`Dimensione totale massima superata (${maxSizeMB}MB).`);
      return;
    }

    setSelectedFiles(combinedFiles);
    onFilesSelected(combinedFiles);
  };

  const removeFile = (index: number) => {
    const updated = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(updated);
    onFilesSelected(updated);
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = () => {
    setIsDragging(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files) {
      processFiles(Array.from(e.dataTransfer.files));
    }
  };

  return (
    <div className={cn("flex flex-col gap-4 w-full", className)}>
      <label className="text-[10px] font-bold tracking-[0.2em] text-brand-dark/50 uppercase font-sans">
        {label}
      </label>
      
      <div
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        onClick={() => fileInputRef.current?.click()}
        className={cn(
          "border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-all",
          isDragging 
            ? "bg-brand-primary/5 border-brand-primary" 
            : "bg-brand-alabaster/20 border-brand-dark/10 hover:border-brand-primary/30"
        )}
      >
        <input
          type="file"
          multiple
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
        <Icon icon="solar:upload-minimalistic-bold" className="text-4xl text-brand-dark/20 mx-auto mb-4" />
        <p className="text-sm text-brand-dark font-sans font-bold uppercase tracking-widest mb-2">Trascina i file o clicca qui</p>
        <p className="text-xs text-brand-dark/40 font-sans">Supporta PDF, PPT, DOC, XLS, JPG, PNG, ZIP (Max {maxSizeMB}MB)</p>
      </div>

      {error && <span className="text-[10px] text-red-500 font-bold uppercase tracking-wider">{error}</span>}

      {selectedFiles.length > 0 && (
        <div className="flex flex-col gap-2 mt-2">
          {selectedFiles.map((file, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-brand-alabaster/30 rounded-lg border border-brand-dark/5 group">
              <div className="flex items-center gap-3">
                <Icon icon="solar:document-text-bold" className="text-brand-primary text-xl" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-brand-dark truncate max-w-[200px]">{file.name}</span>
                  <span className="text-[10px] text-brand-dark/40 font-sans">{(file.size / (1024 * 1024)).toFixed(2)} MB</span>
                </div>
              </div>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); removeFile(i); }}
                className="text-brand-dark/20 hover:text-red-500 transition-colors p-2"
              >
                <Icon icon="solar:trash-bin-trash-bold" className="text-lg" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
