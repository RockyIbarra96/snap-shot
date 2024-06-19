module.exports = function(api) {
    api.cache(true);
  
    const presets = [
      "@babel/preset-env",    // Transpile modern JavaScript features
      "@babel/preset-react"   // Transpile JSX syntax
    ];
  
    return {
      presets
    };
  }
  