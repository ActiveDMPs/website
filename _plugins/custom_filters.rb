module Jekyll
  module CustomFilters
    def makelinks(text)
      text.gsub(/https?:\/\/[^\s\b<>]+/){|url| "[#{url}](#{url})"}
    end
  end
end

Liquid::Template.register_filter(Jekyll::CustomFilters)
