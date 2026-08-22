import React, { Component, ErrorInfo, ReactNode } from 'react';
import { RefreshCw, AlertTriangle } from 'lucide-react';

export interface ErrorBoundaryProps {
  children?: ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FAF7FD] flex flex-col items-center justify-center p-6 text-center text-[#180D26]">
          <div className="w-16 h-16 rounded-3xl bg-[#FCE7F3] border border-[#F472B6]/40 flex items-center justify-center text-[#BE185D] mb-4 shadow-lg">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold font-serif-luxury text-[#180D26] mb-2">
            마스터키 플렉스터치 일시적 화면 오류
          </h1>
          <p className="text-sm text-[#5B4870] max-w-md mb-6">
            화면을 불러오는 중 문제가 발생했습니다. 아래 버튼을 눌러 새로고침을 진행해 주세요.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white font-bold text-sm shadow-md hover:opacity-95 flex items-center gap-2 cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            <span>페이지 새로고침</span>
          </button>
          {this.state.error && (
            <pre className="mt-6 p-4 rounded-xl bg-white border border-[#A855F7]/20 text-xs text-left max-w-xl overflow-x-auto text-red-600">
              {this.state.error.toString()}
            </pre>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}
