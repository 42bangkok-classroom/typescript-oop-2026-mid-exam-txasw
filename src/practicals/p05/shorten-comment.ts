const comment = "TypeScript is a strongly typed programming language"

export function shortenComment(comment: string): string {
  // Write your code below
  return comment.split(" ").filter(word => word.length >= 5 && word.length <= 10).join(" ")
}