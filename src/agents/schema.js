import { z } from 'zod';

// Define the expected structure of an agent based on the issue description
export const AgentSchema = z.object({
  id: z.string().min(1, "Agent ID is required"),
  provider: z.string().min(1, "Provider is required"),
  inputs: z.record(z.any()).optional(), // Adjust based on your exact input structure
  // Add any other required fields or functions here
});
