interface AdSenseProps {
  slot?: "top" | "sidebar" | "bottom" | "inline";
  className?: string;
}

const AdSense = ({ slot = "inline", className = "" }: AdSenseProps) => {
  const adConfig = {
    top: { height: "90px", label: "Banner Ad 728x90" },
    sidebar: { height: "250px", label: "Sidebar Ad 300x250" },
    bottom: { height: "90px", label: "Bottom Banner 728x90" },
    inline: { height: "280px", label: "Large Rectangle 336x280" },
  };

  const config = adConfig[slot];

  return (
    <div className={`flex items-center justify-center bg-muted/30 backdrop-blur-sm border-2 border-dashed border-border/50 rounded-lg ${className}`} style={{ minHeight: config.height }}>
      <div className="text-center p-4">
        <div className="text-xs font-mono text-muted-foreground/60 mb-1">
          {config.label}
        </div>
        <div className="text-xs text-muted-foreground/40">
          AdSense Placeholder
        </div>
        {/* Replace this placeholder with actual AdSense code:
        <ins className="adsbygoogle"
             style={{ display: "block" }}
             data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
             data-ad-slot="XXXXXXXXXX"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
        <script>
             (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
        */}
      </div>
    </div>
  );
};

export default AdSense;
