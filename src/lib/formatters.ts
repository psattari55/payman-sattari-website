// src/lib/formatters.ts

export function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  }

  export function formatReadTime(time: string) {
    return `${time} read`;
  }