// filepath: c:\Users\User\Desktop\project\frontend\src\reown-appkit.d.ts
declare module '@reown/appkit/react' {
    // Add the necessary type declarations here
    export function createAppKit(config: any): void;
  }
  
  declare module '@reown/appkit-adapter-solana/react' {
    export class SolanaAdapter {
      constructor(config: any);
    }
  }
  
  declare module '@reown/appkit/networks' {
    export const solana: any;
    export const solanaTestnet: any;
    export const solanaDevnet: any;
  }