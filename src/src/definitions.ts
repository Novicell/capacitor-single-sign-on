declare global {
  interface PluginRegistry {
    CustomTabsPlugin?: ICustomTabsPlugin;
  }
}

export interface ICustomTabsPlugin {
  show(
    options: {
      url: string;
      customScheme?: string;
    },
    response?: Function
  ): void;
}
