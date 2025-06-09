'use server';

/**
 * @fileOverview Photo enhancement flow for applying consistent styling and aesthetic adjustments to images.
 *
 * - enhancePhoto - A function to enhance a given photo.
 * - EnhancePhotoInput - The input type for the enhancePhoto function.
 * - EnhancePhotoOutput - The return type for the enhancePhoto function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhancePhotoInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo to enhance, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type EnhancePhotoInput = z.infer<typeof EnhancePhotoInputSchema>;

const EnhancePhotoOutputSchema = z.object({
  enhancedPhotoDataUri: z
    .string()
    .describe("The enhanced photo, as a data URI with MIME type and Base64 encoding."),
});
export type EnhancePhotoOutput = z.infer<typeof EnhancePhotoOutputSchema>;

export async function enhancePhoto(input: EnhancePhotoInput): Promise<EnhancePhotoOutput> {
  return enhancePhotoFlow(input);
}

const enhancePhotoPrompt = ai.definePrompt({
  name: 'enhancePhotoPrompt',
  input: {schema: EnhancePhotoInputSchema},
  output: {schema: EnhancePhotoOutputSchema},
  prompt: [
    {media: {url: '{{{photoDataUri}}}'}},
    {
      text: `You are an expert photo editor specializing in beauty photography.

      Take the provided photo and adjust it to fit a consistent theme and aesthetic for a lash and brow salon.
      The desired aesthetic is feminine, romantic, and chic, with a color palette of blush pink, nude, and rose gold.
      Apply style transfer and color palette adjustments as needed. Also make adjustments such as blur/sharpness automatically as needed, and crop/scale/rotate as needed to produce a professional result.
      Return the enhanced photo as a data URI.

      Ensure the enhanced photo maintains high quality and is visually appealing for marketing purposes.`,
    },
  ],
  config: {
    responseModalities: ['TEXT', 'IMAGE'], // MUST provide both TEXT and IMAGE, IMAGE only won't work
  },
});

const enhancePhotoFlow = ai.defineFlow(
  {
    name: 'enhancePhotoFlow',
    inputSchema: EnhancePhotoInputSchema,
    outputSchema: EnhancePhotoOutputSchema,
  },
  async input => {
    const {media} = await ai.generate(enhancePhotoPrompt(input));
    return {enhancedPhotoDataUri: media!.url!};
  }
);
